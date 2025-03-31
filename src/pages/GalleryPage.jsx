import React from 'react';
import programma1 from '../images/gallery/programma1.jpg'
import programm2 from '../images/gallery/programm2.jpg'
import mom1 from '../images/gallery/mom_and_daughter.jpg'
import mom2 from '../images/gallery/mom and daughter2.jpg'
import ball1 from '../images/gallery/ball1.jpg'
import ball2 from '../images/gallery/ball2.jpg'
import papa_bike from '../images/gallery/papa_bike.jpg'
import dance from '../images/gallery/dance.jpg'
import karate from '../images/gallery/karate.jpg'
import knitting from '../images/gallery/knitting.jpg'
import '../css/gallery.css'; // Стили для компонентов
import '../css/family.css'

const photos = [
    {
        id: 1,
        imageUrl: mom1,
        description: 'Луковка в гостях на работе у мамы 🤹🤹🤹'
    },
    {
        id: 2,
        imageUrl: mom2,
        description: 'Луковка и мама в аптеке ⛑️⛑️⛑️💊💊💊  '
    },
    {
        id: 3,
        imageUrl: ball1,
        description: 'Марсианец 🐹🐹🐹футболист ⚽️⚽️⚽️ '
    },
    {
        id: 4,
        imageUrl: ball2,
        description: 'Марсик 🐱🐱🐱🐱 следит ⚽️⚽️⚽️⚽️'
    },
    {
        id: 5,
        imageUrl: programma1,
        description: 'Папа учит дочь жестко кодить 👷‍♂️👷‍♂️👷‍♂️'
    },
    {
        id: 6,
        imageUrl: programm2,
        description: 'Папа учит дочь жестко кодить 👷‍♂️👷‍♂️👷‍♂️'
    },
    {
        id: 7,
        imageUrl: dance,
        description: 'Девочка и котик танцуют🎉🎉🎉'
    },
    {
        id: 8,
        imageUrl: karate,
        description: 'Луковка - чемпион по карате 👍👍👍'
    },
    {
        id: 9,
        imageUrl: papa_bike,
        description: 'Папа упал с велосипеда 🤣🤣🤣 видимо 🍷🍷🍷'
    },
    {
        id: 10,
        imageUrl: knitting,
        description: 'Мама учит Луковку вязать 👷‍♂️👷‍♂️👷‍♂️'
    },
    // Добавьте больше фотографий, если нужно
];

// Компонент карточки фотографии
const PhotoCard = ({ imageUrl, description }) => (
    <div className="photo-card">
        <img src={imageUrl} alt={description} />
        <p>{description}</p>
    </div>
);

// Основной компонент галереи
const GalleryPage = () => (
    <div>
        <h1>Галерея</h1>
    <div className="gallery">

        {photos.map(photo => (
            <PhotoCard key={photo.id} {...photo} />
        ))}
    </div>
    </div>
)

export default GalleryPage;