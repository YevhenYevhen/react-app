import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../css/style.css';
import { AuthContext } from '../../context/AuthContext';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return (
    <div className="navbar">
      <div className="navbar__links">
        <NavLink to="about">About</NavLink>
        <NavLink to="posts">Posts</NavLink>
        <MyButton onClick={logout}>Log out</MyButton>
      </div>
    </div>
  );
};

export default Navbar;
