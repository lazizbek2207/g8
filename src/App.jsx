import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Properties from './pages/Properties'
import Contacts from './pages/Contacts'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes >
    </>
  )
}
