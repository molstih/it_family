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
                <h1 className="welcome">Добро пожаловать в мой мир!</h1>
                <motion.img
                    src={family}
                    alt="Приветственная картинка"
                    style={{ width: '300px', height: 'auto' }}
                    whileHover={{ scale: 1.1 }}
                />
            </motion.div>
        </div>
    )
}

export default HomePage