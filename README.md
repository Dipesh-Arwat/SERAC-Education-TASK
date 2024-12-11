# SERAC Education Task

This is a **MERN Stack Application** built as part of the SERAC Education task. The application includes user authentication with signup and login functionality, a Home page for logged-in users, and the ability to log out securely. The application also features animated CSS for enhanced user experience.

## Features

- **Signup and Login**
  - Users can register with their email, password, and contact number.
  - Form validation ensures proper input before submission.
- **Home Page**
  - Displays a welcome message for logged-in users.
  - Includes an "Explore More" button and a "Logout" button.
- **Logout Functionality**
  - Securely logs out the user by clearing the authentication token.
  - Redirects the user to the login page.

## Tech Stack

### Frontend
- **React.js**: Component-based UI framework.
- **CSS**: For custom styling and animations (including `animate.css` for predefined animations).

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: Database for storing user data.


## Installation

### Prerequisites
- Node.js installed
- MongoDB set up locally or a cloud database (e.g., MongoDB Atlas)

### Clone the Repository
```bash
https://github.com/Dipesh-Arwat/SERAC-Education-TASK.git
cd SERAC-Education-TASK
```

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the `react-assign` directory:
   ```bash
   cd react-assign
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The application will run on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Folder Structure

```plaintext
SERAC-Education-TASK/
|-- backend/       # Backend code
|-- react-assign/      # Frontend code
|-- README.md      # Project documentation
```

## Deployment

### Backend
1. Deploy the backend server to Render.com or another hosting provider.
2. Update the API base URL in the frontend code to point to the deployed backend server.

### Frontend
1. Build the production-ready frontend:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to GitHub Pages or another hosting platform.

## Screenshots

### Login Page
![image](https://github.com/user-attachments/assets/64452986-12ce-473b-aaf3-75873f297c35)

### Signup Page
![image](https://github.com/user-attachments/assets/a179483f-bc8b-4655-9371-ee979ba558e7)

### Home Page
![image](https://github.com/user-attachments/assets/70830d99-e15b-40e8-8214-278a89754aef)

---

Feel free to contribute to this project by submitting issues or pull requests!
