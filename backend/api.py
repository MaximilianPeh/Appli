from flask import Flask, request, jsonify
from recommendations import get_recommendations
from autotagging import get_autotag
from recommendations import get_recommendations
from autotagging import get_autotag
import os
import json
from waitress import serve

app = Flask(__name__)

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Load credentials from environment variable or file based on environment
if 'FIREBASE_CREDENTIALS' in os.environ:
    cred = credentials.Certificate(json.loads(os.environ['FIREBASE_CREDENTIALS']))
else:
    cred = credentials.Certificate("appli-b7af4-firebase-adminsdk-fbsvc-56b516817b.json")

firebase_admin.initialize_app(cred)

db = firestore.client()

@app.route('/recommendations', methods=['POST']) # post means send data to api; get means you get data from firebase
def recommendations():
    # Get raw data from both collections and extract itemName field
    user_history = [doc.to_dict()["itemName"] for doc in db.collection("borrowingHistory").get()]
    all_offers = [doc.to_dict()["title"] for doc in db.collection("offers").get()]
    combined_data = user_history + all_offers
    print(combined_data)

    recommendations = get_recommendations(combined_data)
    print(recommendations)
    return (recommendations)

# AUTOTAG
@app.route('/autotag', methods=['POST'])
def autotag():
    data = request.json
    image_path = data.get('image_path')
    autotag = get_autotag(image_path)
    return jsonify(autotag)


@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "i am good"})

# GREET
@app.route('/greet/<name>', methods=['GET'])
def greet(name):
    return jsonify({"status": f"i, {name} am good"})

# PUT AN ITEM INTO DATABASE
@app.route('/put_offer', methods=['POST'])
def put_offer():
    data = request.json
    print(data)
    doc_ref = db.collection("offers").document()
    doc_ref.set(data)
    return jsonify({"status": f"i put your name: {data}"})

# GET ALL OFFERS (LIST OF ALL ITEMS AVAILABLE TO BORROW)
@app.route('/get_all_offers', methods=['GET'])
def get_all_offers():
    docs = db.collection("offers").get()
    return jsonify([doc.to_dict() for doc in docs])

# PUT AN ITEM INTO BORROWING HISTORY
@app.route('/put_borrow', methods=['POST'])
def put_borrow():
    data = request.json
    print(data)
    doc_ref = db.collection("borrowingHistory").document()
    doc_ref.set(data)
    return jsonify({"status": f"i put your name: {data}"})

# GET BORROWING HISTORY
@app.route('/get_all_borrows', methods=['GET'])
def get_borrows():
    docs = db.collection("borrowingHistory").get()
    return jsonify([doc.to_dict() for doc in docs])


if __name__ == '__main__':
    serve(app, host="0.0.0.0", port=5001)
    # app.run(debug=False, port=5001)
