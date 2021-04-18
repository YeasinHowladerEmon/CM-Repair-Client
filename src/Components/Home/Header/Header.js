import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/Navbar/NavBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'
const Header = () => {
    return (
        <div className="headerContainer">
         <NavBar></NavBar>
         <HeaderMain/>
         
        </div>
    );
};

export default Header;