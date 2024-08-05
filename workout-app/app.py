import os
from flask import Flask, render_template, request, redirect, url_for, abort, request, session, flash, g, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


@app.route('/')
def home():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(port = 5000, debug = True)