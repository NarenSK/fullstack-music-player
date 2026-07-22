![React](https://img.shields.io/badge/React-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

#  Synthesia - Full Stack Music Streaming Application

Synthesia is a modern full-stack music streaming web application built using the MERN stack. It provides users with a seamless music listening experience along with secure authentication, playlist management, responsive UI, and an intuitive interface. The application demonstrates full-stack development concepts, REST APIs, cloud-based media management, and user authentication.

---

##  Features

###  User Features
- Secure User Authentication (Sign Up / Login)
- JWT-based Authentication & Authorization
- Browse available songs and albums
- Stream music with an interactive music player
- Play, Pause, Next, Previous controls
- Shuffle, Loop
- Favourites
- Search
- Forgot Password, Reset Password in sign up/ login
- Playback speed
- Seek through songs using progress bar
- Volume control
- Display current playing song information
- Album-wise music browsing
- Responsive UI for desktop and mobile devices

### Music Player
- Real-time playback controls
- Dynamic progress bar
- Song duration display
- Auto play next track
- Repeat playback support
- Queue management
- Album artwork display

### Library Management
- Browse Albums
- Browse Songs
- View Album Details
- Search Songs 

### Admin Features
- Secure Admin Authentication
- Upload Songs
- Upload Album Covers
- Create New Albums
- Delete Songs
- Delete Albums
- Manage Music Library

### Media Storage
- Cloud Image Storage
- Audio File Upload Management
- Optimized Media Delivery

---

## Tech Stack

### Frontend
- React.js
- Vite
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS 

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### Cloud Services
- ImageKit (Image & Audio Storage)
- Mailtrap (Email Testing)

---

## Project Structure

```
Synthesia/
│
├── frontend/
|   ├── public/
│   ├── src/
│   
├── backend/
|   ├── config/
│   ├── controllers/
│   ├── middleware/
|   ├── models/
│   ├── routes/
│   ├── utils/   
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/NarenSK/fullstack-music-player.git

cd fullstack-music-player
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_endpoint

MAILTRAP_TOKEN=your_token
```

---

##  Screenshots

<img width="1280" height="628" alt="image" src="https://github.com/user-attachments/assets/b37fdead-b0ec-4862-91ff-c0820384db50" />


---

## Learning Outcomes

This project helped strengthen my understanding of:

- Full Stack MERN Development
- REST API Development
- JWT Authentication
- Redux State Management
- MongoDB Database Design
- Cloud Media Storage
- Responsive Web Design
- File Upload Handling
- API Integration
- Component-based React Architecture

---

## Future Enhancements

- Recently Played
- Lyrics Integration
- Music Recommendations
- Playlist Creation
- Dark/Light Theme
- Real-time Listening Activity
- Social Sharing
- Premium Subscription Features

---

## Project Highlights

- Full Stack MERN Application
- Secure Authentication System
- Responsive User Interface
- Cloud-based Media Management
- Modern React Architecture
- Clean and Scalable Code Structure

---

## Author

**Naren Subramanian Kanthimathi**

B.Tech Computer Science and Engineering (IoT & Automation)

SASTRA Deemed University

---

## Internship Project

**Organization:** Webstack Academy (WSA)

This project was developed as part of my Full Stack Development Internship, where I gained hands-on experience in building a complete MERN stack application.


## Show Your Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
