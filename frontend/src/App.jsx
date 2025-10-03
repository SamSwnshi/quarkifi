import React, { Children } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Login from './page/Login'
import SearchPage from './page/SearchPage'
import MovieList from './page/MovieList'
import { useSelector } from 'react-redux'
import MovieDetails from './page/MoviesDetails'

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
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={
            <div>
              <SearchPage/>
              <MovieList/>
            </div>
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
      </Router>
    </>
  )
}

export default App
