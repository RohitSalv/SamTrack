# 📊 SamTrack – Student Attendance Management System

**SamTrack** is a full-stack web application designed to manage and monitor student attendance effectively. It was developed as part of a training project at *The Kiran Academy*, using a modern tech stack and relational database design.

---

## 🚀 Key Features

- 👤 Role-based authentication (Admin, Faculty)
- 🧑‍🎓 Student creation and attendance tracking
- 📚 Subject-wise attendance records
- 🏫 Institute (Customer) level segmentation
- 📈 Dashboards for managing users, students, and sessions

---

## 🛠 Tech Stack

| Layer      | Technology                       |
|------------|----------------------------------|
| Frontend   | Angular 17+, TypeScript, HTML/CSS |
| Backend    | Spring Boot (Java 17), REST APIs |
| Database   | MySQL                            |
| Tools      | Maven, Postman, Git              |

---

## 🗂️ Project Structure

SamTrack/
├── backend-springboot/ # Java Spring Boot APIs
├── frontend-angular/ # Angular frontend app
├── database/ # schema.sql + ER diagram
│ └── er-diagram.png
├── docs/
│ └── screenshots/ # UI screenshots
│ ├── add-user.png
│ ├── admin-dashboard.png
│ ├── all-subject.png
│ ├── home-page.png
│ └── sign-in.png
├── .gitignore
└── README.md

yaml
Copy
Edit

---

## 🧩 ER Diagram

📌 Database schema used in the project:

![ER Diagram](database/er-diagram.png)

---

## 📸 Screenshots

| Page | Screenshot |
|------|------------|
| 🔐 Sign In | ![Sign In](docs/screenshots/sign-in.png) |
| 🏠 Home Page | ![Home Page](docs/screenshots/home-page.png) |
| 📋 Admin Dashboard | ![Admin Dashboard](docs/screenshots/admin-dashboard.png) |
| ➕ Add User | ![Add User](docs/screenshots/add-user.png) |
| 📚 All Subjects | ![All Subjects](docs/screenshots/all-subject.png) |

---

## 🧱 Database Setup

```sql
CREATE DATABASE samtrack;
-- Then import schema.sql inside /database folder
🧪 Getting Started
🔧 Prerequisites
Java 17+

Maven

Node.js 16+

Angular CLI

MySQL Server

▶️ Run the Backend
bash
Copy
Edit
cd backend-springboot
./mvnw spring-boot:run
Update application.properties with your MySQL credentials.

💻 Run the Frontend
bash
Copy
Edit
cd frontend-angular
npm install
ng serve
App will be available at: http://localhost:4200

👨‍🏫 Training Note
This project was created as part of my training at The Kiran Academy to master full-stack development using Angular, Spring Boot, and MySQL.

🤝 Connect With Me
🔗 LinkedIn: Rohit Salve

💻 GitHub: @RohitSalv

📧 Email: salver814@gmail.com