import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './page/Login'
import SearchPage from './page/SearchPage'
function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<SearchPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
