import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import "../css/navbar.css"
// Используем react-router-dom для ссылок

// Компонент Navbar
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <nav className="navbar">
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <ul className="navbar-list">
                <li><NavLink to="/" className="active">Главная страница</NavLink></li>
                <li><NavLink to="/about" className="active">О нас</NavLink></li>
                <li><NavLink to="/achieve" className="active">Достижения</NavLink></li>
                <li><NavLink to="/gallery" className="active">Gallery</NavLink></li>
                <li><NavLink to="/book" className="active">Луковка и хвостатый Марсианец</NavLink></li>
                <li><NavLink to="/contacts" className="active">Контакты</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;