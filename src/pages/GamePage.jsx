import React from "react";
import screen1 from "../images/screen1.jpg"
import screen2 from "../images/screen2.jpg"
import screen3 from "../images/screen3.jpg"
import "../css/family.css"

const GamePage = () => {
    return (
        <main className="game-content">
            <h2>"Марсик-детектив" — увлекательная игра-головоломка для детей от 7 лет.</h2>
            <section className="game-gallery">
                <div className="screenshots-container">
                    <div>
                        <img src={screen1} alt=""/>
                    </div>
                    <div>
                        <img src={screen2} alt=""/>
                    </div>
                    <div>
                        <img src={screen3} alt=""/>
                    </div>
                </div>

            </section>
            <section className="game-info">

                <p>Главная задача игрока — помогать Марсику раскрывать тайны и загадки, используя свою смекалку и
                    наблюдательность!</p>

                    <p><strong>Жанр:</strong> головоломка, квест</p>
                    <p><strong>Возрастная категория:</strong> 7+</p>
                    <p><strong>Платформы:</strong> Android</p>

            </section>
            <section className="features">
                <h2>Особенности игры:</h2>
                    <p>Увлекательные задания и мини-игры;</p>
                    <p>Красочная графика и анимация;</p>
                    <p>Развитие логического мышления и внимания;</p>
                    <p>Обучение основам дедукции и аналитическим способностям.</p>
            </section>
            <section className="downloads">
                <a href="https://play.google.com/store/apps/details?id=ru.molstih.detectivemars">Скачать игру для Android</a>
            </section>
        </main>
    )
}

export default GamePage