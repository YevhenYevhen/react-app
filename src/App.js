import './css/style.css'
import Navbar from './components/UI/navbar/Navbar'
import AppRouter from './components/UI/AppRouter'
import React, { useEffect, useState } from 'react'
import { AuthContext } from './components/context/AuthContext'

export default function App() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])


    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <div className='App'>
                <Navbar />
                <AppRouter />
            </div>
        </AuthContext.Provider>
    )
}

