import React from "react";
import "../css/family.css"

const Footer = () => {
    return (
        <footer>
            <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> ИП Лысиков В.А. {new Date().getFullYear()}
        </footer>
    )
}

export default Footer;