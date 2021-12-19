import './css/style.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './components/context/AuthContext';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}
