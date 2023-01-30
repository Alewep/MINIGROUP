# FLASK_APP=main.py FLASK_DEBUG=1 flask run

import os
import subprocess
from flask import Flask, redirect, url_for, request,render_template, jsonify
from flask import Flask
from flask_cors import CORS, cross_origin
import tempfile
import json

app = Flask(__name__,template_folder=".")
cors = CORS(app)
app.config['CORS_HEADER'] = 'Content-Type'


@app.route('/resolve', methods=['POST'])
@cross_origin()
def resolve():
    temp_file = tempfile.NamedTemporaryFile(mode="w+", suffix=".dzn", delete=False)
    temp_file.write(request.form['javascript_data'])
    temp_file.close()
    child = subprocess.Popen(["minizinc", "--solver", "gecode", temp_file.name, "Models/ModelDuo.mzn"],
                             stdout=subprocess.PIPE,
                             stderr=subprocess.STDOUT)
    child.wait()
    os.remove(temp_file.name)

    response = child.stdout.read()
    print(response)
    return str(response).replace("\\n","|----|")

@app.route('/')
@cross_origin()
def main():
    return render_template('web/index.html')

if __name__ == '__main__':
    app.run()
