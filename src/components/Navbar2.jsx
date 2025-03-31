import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../css/navbar2.css";

const Navbar2 = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Управление состоянием открытия меню

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <button className="hamburger" onClick={handleToggleMenu}>
                <i className="fas fa-bars"></i> {/* Используйте любой значок гамбургера */}
            </button>

            <ul className={`navbar-list ${menuOpen ? 'show' : ''}`}> {/* Добавляем класс show при открытии */}
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

export default Navbar2