import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LoginPage from '../Login/login'
import RegisterPage from '../Register/Register'

const Index = () => {
    return (
        <div>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
        
        </div>
    )
}

export default Index;
