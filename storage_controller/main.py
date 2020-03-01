from google.cloud import storage
import flask
from flask import request
from flask_cors import CORS

app = flask.Flask(__name__)
app.config["DEBUG"] = True
cors = CORS(app)

BUCKET="orgresource-0"

# TODO remove dependencies on
LOCATION_OUT="/home/cory/Projects/OrgResource/out.txt"
LOCATION_IN="/home/cory/Documents/co-op networking.txt"

@app.route('/upload', methods=['POST'])
def upload():
    entity = request.args.get('entity')
    page = request.args.get('page')
    resource = request.args.get('resource')

    # handle None
    if entity is None or page is None or resource is None:
        return ""

    # get blob
    OBJ = entity + "/" + page + "/" + resource
    blob = get_blob(OBJ)

    # do something
    blob.upload_from_filename(LOCATION_IN)
    
@app.route('/download', methods=['POST'])
def download():
    entity = request.args.get('entity')
    page = request.args.get('page')
    resource = request.args.get('resource')

    # handle None
    if entity is None or page is None or resource is None:
        return ""
    
    # get blob
    OBJ = entity + "/" + page + "/" + resource
    blob = get_blob(OBJ)

    # do something
    blob.download_to_filename(LOCATION_OUT)

# run
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)

# helper functions
def get_blob(OBJ_STR):
    # Instantiates a client
    storage_client = storage.Client()
    bucket = storage_client.bucket(BUCKET)
    blob = bucket.blob(OBJ_STR)
    return blob

"""Not sure if this is needed"""
# @app.after_request
# def after_request(response):
#   response.headers.add('Access-Control-Allow-Origin', '*')
#   response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#   response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
#   return response