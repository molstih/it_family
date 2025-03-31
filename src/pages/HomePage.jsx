import React from "react";
import {motion} from "framer-motion";
import family from "../images/family.jpg"
import "../css/family.css"

const HomePage = () => {
    return (
        <div className="home">
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 15, 0],
                    transition: {
                        duration: 2,
                        yoyo: Infinity,
                        ease: 'easeInOut',
                    },
                }}
            >
                <h1 className="welcome">Добро пожаловать в гости издательской группы "Лысиковы"!</h1>
                <motion.img
                    src={family}
                    alt="Приветственная картинка"
                    style={{ width: '300px', height: 'auto' }}
                    whileHover={{ scale: 1.1 }}
                />
                <p>
                    Здесь вы познакомитесь с маленькой девочкой Луковкой и ее любимым питомцем Марсианцем.
                </p>
                <p>
                    Вместе с Луковкой узнаете, почему папа Томатыч обожает глазунью.
                </p>
                <p>
                    Вместе с Луковкой узнаете, почему программирование это настоящая магия вне Хогвартса, но при этом не запрещена.
                </p>
                <p>
                    Вместе с Луковкой и Марсиком разработаете свое первое андроид-приложение.
                </p>
                <p>Отправляемся в путь, вы с нами?</p>
            </motion.div>
        </div>
    )
}

export default HomePage