from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

# Load model and vectorizer
with open("ml-model\\vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

with open("ml-model\\model.pkl", "rb") as f:
    model = pickle.load(f)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    description = data.get("description", "")
    X = vectorizer.transform([description])
    pred = model.predict(X)[0]
    return jsonify({"predicted_category": pred})

if __name__ == "__main__":
    app.run(port=5000)
