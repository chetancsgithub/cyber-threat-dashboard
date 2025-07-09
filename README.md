# 🔐 Cyber Threat Intelligence Dashboard

A full-stack web application for analyzing cyber threat descriptions using machine learning. Built with React.js (frontend), Spring Boot + JWT (backend), Flask ML API (ML model), and MySQL (database). Containerized using Docker and orchestrated with Docker Compose.

---

## 🚀 Features

- 🧠 **ML-Powered Threat Analysis**  
  Submit a cyber threat description and get a predicted category using a trained ML model (Logistic Regression with TF-IDF).

- 🔐 **JWT-Based User Authentication**  
  Secure login system with protected API routes (`/api/analyze`).

- 📊 **Threat Dashboard**  
  List, view, and explore cyber threat reports with category labels.

- 🌐 **Modern UI/UX**  
  Clean, responsive interface built using React.

- 🐳 **Containerized**  
  Full application stack runs with a single `docker-compose up` command.

---

## 🧰 Tech Stack

| Layer       | Technology |
|-------------|------------|
| Frontend    | React.js, Axios, Tailwind CSS |
| Backend     | Spring Boot, Spring Security, JWT, JPA |
| ML API      | Python, Flask, scikit-learn |
| Database    | MySQL |
| DevOps      | Docker, Docker Compose |

---

## 📁 Folder Structure

```bash
.
├── backend/           # Spring Boot backend with JWT auth
├── frontend/          # React frontend app
├── ml-model/          # Flask ML API with trained model
├── docker-compose.yml # Orchestrates full stack


⚙️ Setup Instructions
1. 📦 Prerequisites
Docker & Docker Compose installed

Git installed

Internet access to pull Docker images

2. 🚀 Run Application (All-in-One)
bash
Copy
Edit
git clone https://github.com/chetancsgithub/cyber-threat-dashboard.git
cd cyber-threat-dashboard
docker compose up --build
Frontend: http://localhost:3000

Backend API: http://localhost:8080

ML API: http://localhost:5000

MySQL: localhost:3306 (DB: cyber_security)

🛠️ Manual Setup (Without Docker)
1️⃣ Backend (Spring Boot)
bash
Copy
Edit
cd backend
./mvnw clean install
java -jar target/cyberthreat-0.0.1-SNAPSHOT.jar
Runs on: http://localhost:8080

2️⃣ ML API (Flask)
bash
Copy
Edit
cd ml-model
pip install -r requirements.txt
python predict_api.py
Runs on: http://localhost:5000

✅ Place vectorizer.pkl and model.pkl in ml-model/ folder.

3️⃣ Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm start
Runs on: http://localhost:3000



3. 🧪 Test Credentials
Use the credentials from the users table in MySQL.
Or manually insert a user:

sql
Copy
Edit
INSERT INTO users (username, password, roles)
VALUES ('admin', '$2a$10$hashed_password_here', 'ROLE_USER');
Password must be bcrypt-hashed.

🔐 API Endpoints
Method	Endpoint	Description	Auth Required
POST	/api/auth/login	JWT login	❌ No
POST	/api/analyze	Analyze threat description	✅ Yes (JWT)
GET	/api/threats	List all threats	❌ No


📦 Docker Containers
Service	Port	Description
frontend	3000	React web app
backend	8080	Spring Boot API
mlapi	5000	Flask ML prediction
mysql	3306	MySQL DB

💡 Future Improvements
Role-based access control (admin/users)

Editable threat report management

Threat category visualization (charts)

Integration with third-party cyber intel feeds

🤝 Authors
Chetan CS – @chetancsgithub
B.Tech CSE @ PES University, India





