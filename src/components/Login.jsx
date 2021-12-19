import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <form onSubmit={login} style={{ maxWidth: '200px', margin: '0 auto'}}>
            <h1>Please log in</h1>
            <MyInput type='text' placeholder='Email' />
            <MyInput type='password' placeholder='Password' />
           <MyButton>Ok</MyButton> 
        </form>
    )
}

export default Login
