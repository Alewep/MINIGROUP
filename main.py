import os
import subprocess
from flask import Flask, redirect, url_for, request
from flask import Flask
import tempfile

app = Flask(__name__)


@app.route('/resolve', methods=['POST'])
def resolve():
    temp_file = tempfile.NamedTemporaryFile(mode="w+", suffix=".dzn", delete=False)
    temp_file.write(request.form['data'])
    temp_file.close()
    child = subprocess.Popen(["minizinc", "--solver", "gecode", temp_file.name, "ModelDuo.mzn"],
                             stdout=subprocess.PIPE,
                             stderr=subprocess.STDOUT)
    child.wait()
    os.remove(temp_file.name)

    return child.stdout.read()


if __name__ == '__main__':
    app.run()
