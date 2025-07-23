# Luxury Rentals - Premium House Booking Platform

**Live Demo:** [View the Rental Property Booking Platform](https://luxuryrentalproperties.onrender.com)


A modern and elegant house rental platform with full authentication system.

## Features

- 🏠 **Property Listings** - Browse luxury properties with detailed information
- 🔐 **Authentication System** - Secure signup/login with JWT tokens
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- ⚡ **Fast Performance** - Optimized with React and modern technologies
- 🎨 **Modern UI/UX** - Elegant design with smooth animations

## Authentication Features

- **User Registration** - Create new accounts with email validation
- **User Login** - Secure authentication with password hashing
- **JWT Tokens** - Stateless authentication with automatic token management
- **Protected Routes** - Secure access to user-specific features
- **Session Persistence** - Stay logged in across browser sessions

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Framer Motion (animations)
- Tailwind CSS (styling)
- Axios (HTTP client)
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- bcryptjs (password hashing)
- jsonwebtoken (JWT authentication)
- express-validator (input validation)
- CORS (cross-origin requests)

## Setup Instructions

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 2. Start the Backend Server

```bash
# Start the backend server (runs on port 5000)
cd server
npm start
```

### 3. Start the Frontend

```bash
# In a new terminal, start the frontend (runs on port 3000)
npm start
```

### 4. Or Run Both Simultaneously

```bash
# Install concurrently if not already installed
npm install -g concurrently

# Run both frontend and backend
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/signup` - Register a new user
- `POST /api/login` - Authenticate user
- `GET /api/profile` - Get user profile (protected)

### Health Check
- `GET /api/health` - Server health status

## Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

## Usage

1. **Sign Up**: Click "Sign In" in the navbar, then click "Sign up" to create a new account
2. **Login**: Use your email and password to sign in
3. **Browse Properties**: Explore the luxury properties available
4. **Logout**: Click the logout button to sign out

## Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured for secure cross-origin requests
- **Error Handling**: Comprehensive error handling and user feedback

## Development

The project uses:
- **In-memory storage** for development (users array)
- **Hot reloading** for both frontend and backend
- **Concurrent development** with both servers running

## Production Considerations

For production deployment:
1. Replace in-memory storage with a proper database (MongoDB, PostgreSQL, etc.)
2. Use environment variables for sensitive data
3. Implement rate limiting
4. Add HTTPS
5. Set up proper logging
6. Configure CORS for your domain

## Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── AuthModal.js      # Authentication modal
│   │   ├── Navbar.js         # Navigation with auth
│   │   └── Footer.js
│   ├── context/
│   │   └── AuthContext.js    # Authentication state management
│   ├── pages/                # Page components
│   └── App.js               # Main app with auth provider
├── server/
│   ├── index.js             # Express server with auth endpoints
│   └── package.json         # Backend dependencies
└── package.json            # Frontend dependencies
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. 
