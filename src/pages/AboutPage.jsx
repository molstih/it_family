import React from "react";
import dad from "../images/dad.jpg"
import mom from "../images/mom.jpg"
import daughter from "../images/daughter.jpg"
import cat from "../images/cat.jpg"
import "../css/family.css"

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>Наша семья</h1>
            <p>Мы дружная и веселая семья, состоящая из трех человек и одного пушистого друга.</p>
            <section className="family-members">
                <article className="member-card">
                    <img src={mom} alt="Фотография мамы" />
                        <h2>Мама</h2>
                        <ul>
                            <li><strong>Род деятельности:</strong> Врач-педиатр</li>
                            <li><strong>Увлечения:</strong> Чтение книг, кулинария</li>
                        </ul>
                </article>

                <article className="member-card">
                    <img src={dad} alt="Фотография папы" />
                        <h2>Папа</h2>
                        <ul>
                            <li><strong>Род деятельности:</strong> Инженер-программист</li>
                            <li><strong>Увлечения:</strong> Велоспорт, путешествия</li>
                        </ul>
                </article>

                <article className="member-card">
                    <img src={daughter} alt="Фотография дочери" />
                        <h2>Дочь</h2>
                        <ul>
                            <li><strong>Род деятельности:</strong> Учеба в школе</li>
                            <li><strong>Увлечения:</strong> Рисование, танцы</li>
                        </ul>
                </article>

                <article className="member-card">
                    <img src={cat} alt="Фотография кота" />
                        <h2>Кот</h2>
                        <ul>
                            <li><strong>Род деятельности:</strong> Охота на мышей</li>
                            <li><strong>Увлечения:</strong> Сон, игра с мячиком</li>
                        </ul>
                </article>
            </section>
        </div>
    )
}

export default AboutPage