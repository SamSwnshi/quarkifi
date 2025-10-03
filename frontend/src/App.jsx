import React, { Children } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Login from './page/Login'
import SearchPage from './page/SearchPage'
import MovieList from './page/MovieList'
import { useSelector } from 'react-redux'
import MovieDetails from './page/MoviesDetails'
import Footer from './components/Footer'

const ProtectedRoutes = ({children}) =>{
  const isAuth = useSelector((state) => state.auth.isAuth)
  if(!isAuth){
    return <Navigate to='/login'/>
  }
  return children;
}
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Router>
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path='/login' element={<Login/>}/>
              <Route path='/' element={
                <ProtectedRoutes>
                  <div>
                    <SearchPage/>
                    <MovieList/>
                  </div>
                </ProtectedRoutes>
              }/>
              <Route 
                path="/movies/:id" 
                element={
                  <ProtectedRoutes>
                    <MovieDetails />
                  </ProtectedRoutes>
                } 
              />
            </Routes>
          </main>
          <Footer/>
        </Router>
      </div>
    </>
  )
}

export default App
