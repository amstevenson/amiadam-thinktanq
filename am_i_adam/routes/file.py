from flask import Blueprint, render_template, session, request
from werkzeug import secure_filename
import logging
import os

file = Blueprint('file', __name__)

logger = logging.getLogger()
UPLOAD_FOLDER = os.getenv("UPLOAD_FOLDER")


@file.route("/", methods=["GET"])
def index():
    return render_template("index.html")


@file.route("/send-file", methods=["POST"])
def send_file():
    # Detect what boxes were set in the html index template.
    logger.info("Sending file for upload")
    session.clear()

    # Retrieve the POST information
    uploaded_file = request.files['file']
    file_name = secure_filename(uploaded_file.filename)

    file_type = uploaded_file.content_type

    logger.debug("(Before authentication) Sending to Face Recognition with: file name of: {} , "
                 "file_type of: {} ".format(file_name, file_type))

    return render_template("processing.html", file=uploaded_file)
