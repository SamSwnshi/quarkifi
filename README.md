# Quarkifi - Movie Search Application

A full-stack movie search application built with React and Node.js that allows users to search for movies, view details, and maintain search history.

## 🎬 Features

- **Movie Search**: Search for movies using the IMDb API
- **Movie Details**: View detailed information about specific movies
- **Search History**: Keep track of recent searches for quick access
- **User Authentication**: Protected routes with login functionality
- **Responsive Design**: Modern UI built with Tailwind CSS
- **State Management**: Redux Toolkit for efficient state management

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database (with Mongoose ODM)
- **JWT** - JSON Web Tokens for authentication
- **CORS** - Cross-origin resource sharing
- **Axios** - HTTP client for external API calls

## 📁 Project Structure

```
quarkifi/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── page/           # Page components
│   │   │   ├── Login.jsx
│   │   │   ├── MovieList.jsx
│   │   │   ├── MoviesDetails.jsx
│   │   │   └── SearchPage.jsx
│   │   ├── redux/          # Redux store and slices
│   │   │   ├── store.js
│   │   │   ├── userSlice.js
│   │   │   ├── movieSlice.js
│   │   │   └── historySlice.js
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # Application entry point
│   ├── package.json
│   └── vite.config.js
├── backend/                 # Node.js backend application
│   ├── controllers/        # Route controllers
│   │   └── movies.controllers.js
│   ├── routes/            # API routes
│   │   └── routes.js
│   ├── index.js           # Server entry point
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (for user authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quarkifi
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the backend directory:
   ```env
   PORT=8080
   IMDB_API_URL=your_imdb_api_url
   ```

   Create a `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:8080/api
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:8080`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 📱 Usage

1. **Login**: Access the application through the login page
2. **Search Movies**: Use the search bar to find movies by title
3. **View Details**: Click on any movie to see detailed information
4. **Search History**: Access recent searches from the history section

## 🔧 API Endpoints

- `GET /api/movies` - Get all movies
- `POST /api/search` - Search for movies
- `GET /api/movies/:id` - Get movie details by ID

## 🎨 UI Features

- **Modern Design**: Clean and intuitive interface
- **Responsive Layout**: Works on desktop and mobile devices
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages
- **Search History**: Quick access to recent searches

## 🚀 Deployment

The frontend is configured for deployment on Vercel with the included `vercel.json` configuration.

### Frontend Deployment (Vercel)
```bash
cd frontend
npm run build
# Deploy to Vercel
```

### Backend Deployment
Deploy the backend to your preferred hosting service (Render, Vercel, etc.) and update the frontend environment variables accordingly.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Sameer Suryawanshi**

## 🔗 External APIs

This application integrates with the IMDb API for movie data. Make sure to obtain the necessary API credentials and configure them in your environment variables.

---

**Note**: This application is for educational and demonstration purposes. Make sure to comply with the terms of service of any external APIs you use.
