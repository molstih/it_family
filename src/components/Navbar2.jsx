import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars} from "react-icons/fa"
import "../css/navbar2.css";

const Navbar2 = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Управление состоянием открытия меню

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <nav className="navbar">
            <button className="hamburger" onClick={handleToggleMenu}>
                <FaBars />
                {/*<i className="fas fa-bars">{FaBars}</i> {/* Используйте любой значок гамбургера */}
            </button>

            <ul className={`navbar-list ${menuOpen ? 'show' : ''}`}> {/* Добавляем класс show при открытии */}
                <li onClick={closeMenu}><NavLink to="/" className="active">Главная страница</NavLink></li>
                <li onClick={closeMenu}><NavLink to="/about" className="active">О нас</NavLink></li>
                <li onClick={closeMenu}><NavLink to="/achieve" className="active">Достижения</NavLink></li>
                <li onClick={closeMenu}><NavLink to="/gallery" className="active">Gallery</NavLink></li>
                <li onClick={closeMenu}><NavLink to="/book" className="active">Луковка и хвостатый Марсианец</NavLink></li>
                <li onClick={closeMenu}><NavLink to="/contacts" className="active">Контакты</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar2