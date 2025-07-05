# 🏫 School Management API

A simple Node.js + Express.js + MySQL (or PostgreSQL) backend API for managing schools. It allows you to add schools and list them sorted by proximity to a given location.

## 🚀 Features

- Add a new school with name, address, latitude & longitude
- List all schools sorted by distance from user's coordinates
- MySQL or PostgreSQL database support
- RESTful API using Express.js
- Environment variable configuration using `.env`

---

## 📦 Tech Stack
```
- Node.js
- Express.js
- MySQL2 (or PostgreSQL via `pg`)
- Railway or Render (Deployment)
- dotenv (for config)
- CORS enabled

---

## 📁 Folder Structure

/school_management_api
│
├── routes/
│ └── schoolRoutes.js
│
├── .env.example
├── index.js
├── package.json



---

## 📄 API Endpoints

### 1. Add School

- **URL**: `/api/school/addSchool`
- **Method**: `POST`
- **Payload**:
```json
{
  "name": "ABC International School",
  "address": "New Delhi",
  "latitude": 28.6139,
  "longitude": 77.2090
}
Success Response:


{ "message": "School added successfully!" }
2. List Schools by Proximity
URL: /api/school/listschool?lat=28.6&lng=77.2

Method: GET

Response:


[
  {
    "name": "ABC School",
    "address": "New Delhi",
    "distance_km": 1.23
  },
  ...
]
🛠 Setup Instructions
1. Clone the Repo

git clone https://github.com/your-username/school_api.git
cd school_api
2. Install Dependencies

npm install
3. Configure Environment
Create a .env file:

env
Copy
Edit
PORT=5000
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name

4. Start the Server

npm start
