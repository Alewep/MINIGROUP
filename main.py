# FLASK_APP=main.py FLASK_DEBUG=1 flask run

import os
import subprocess
from flask import Flask, redirect, url_for, request, render_template, jsonify
from flask import Flask
import tempfile
import json
import tools

app = Flask(__name__, template_folder=".", static_folder="web/static")

PATH_FOLDER = "web/static/Minizinc/Models"
DEFAULT_MODEL = "ModelDuo.mzn"

models_parse = {}
for model_name in os.listdir(PATH_FOLDER):
    models_parse[model_name] = tools.parse_mzn(os.path.join(PATH_FOLDER, model_name))


@app.route('/models', methods=['GET'], )
def models():
    data = []
    for key in sorted(models_parse.keys()):
        data.append({
            "name": key,
            "size": models_parse[key]["size"]
        })

    return json.dumps({"models": data})


@app.route('/model/', defaults={'model_name': DEFAULT_MODEL})
@app.route('/model/<model_name>', methods=['GET'])
def model(model_name):
    path_model = f"web/static/Minizinc/Models/{model_name}"
    print(path_model)
    print(model_name in models_parse)
    if model_name in models_parse:
        return json.dumps(models_parse[model_name]), 200

    else:
        return json.dumps({"error": f"model {model_name} doesn't exist"}), 406


@app.route('/resolve', methods=['POST'])
def resolve():
    print(request.json)
    model_name = request.json['model_name']
    data = request.json['data']
    constraints = request.json['constraints']
    size = request.json["size"]

    print(constraints)

    # test if the model exist
    if not models_parse:
        return {"error": f"model {model_name} doesn't exist"}, 406

    if models_parse[model_name]["size"] == "n":
        data += f"\nsize={size};"

    # create a new .dzn temp file
    temp_file_dzn = tempfile.NamedTemporaryFile(mode="w+", suffix=".dzn", delete=False)
    temp_file_dzn.write(data)
    temp_file_dzn.close()

    # create a new .mzn temp file
    temp_file_mzn = tempfile.NamedTemporaryFile(mode="w+", suffix=".mzn", delete=False)
    temp_file_mzn.write(tools.to_mzn(models_parse[model_name], constraints))
    temp_file_mzn.close()

    # call mizinc command
    child = subprocess.Popen(["minizinc", "--solver", "gecode", temp_file_dzn.name, temp_file_mzn.name],
                             stdout=subprocess.PIPE,
                             stderr=subprocess.STDOUT)
    child.wait()
    os.remove(temp_file_dzn.name)
    os.remove(temp_file_mzn.name)

    # get the output and do traitement to get a validated json format

    response = child.stdout.read()
    response = response.decode("utf-8")

    if "Error" in response:
        start = response.find("Error")
        response = response[start:]
        response = response.replace("\n", "")
        return json.dumps({"error": response}), 400

    if "MiniZinc: type error" in response:
        start = response.find("MiniZinc: type error")
        response = response[start:]
        response = response.replace("\n", "").strip()
        return json.dumps({"error": response}), 400

    if "UNSATISFIABLE" in response:
        response = json.dumps({"statisfiable": False})

    else:
        OKBLUE = '\033[94m'
        ENDC = '\033[0m'

        response = response.replace("-", "").replace("=", "")
        print(OKBLUE, response, ENDC)
        response = json.dumps({"statisfiable": True, "solution": json.loads(response)})

    return response, 200


@app.route('/')
def main():
    return render_template('web/index.html')


if __name__ == '__main__':
    app.run()
