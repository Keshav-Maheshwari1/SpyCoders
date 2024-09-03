import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './constants/Path'


const App = () => {
  return (
    <BrowserRouter>
    <div className="w-full h-screen grid place-items-center ">
        <h1 style={{ color: "green" }}>
            useRoutes Example</h1>
        <AppRoutes />
    </div>
</BrowserRouter>
  )
}

export default App