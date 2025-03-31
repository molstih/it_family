import React from 'react';
import cat from '../images/cat.jpg'
import daughter from '../images/daughter.jpg'
import '../css/gallery.css'; // Стили для компонентов
import '../css/family.css'

const photos = [
    {
        id: 1,
        imageUrl: cat,
        description: 'Описание первой фотографии'
    },
    {
        id: 2,
        imageUrl: daughter,
        description: 'Описание второй фотографии'
    },
    {
        id: 1,
        imageUrl: cat,
        description: 'Описание первой фотографии'
    },
    {
        id: 2,
        imageUrl: daughter,
        description: 'Описание второй фотографии'
    },
    {
        id: 1,
        imageUrl: cat,
        description: 'Описание первой фотографии'
    },
    {
        id: 2,
        imageUrl: daughter,
        description: 'Описание второй фотографии'
    },
    {
        id: 1,
        imageUrl: cat,
        description: 'Описание первой фотографии'
    },
    {
        id: 2,
        imageUrl: daughter,
        description: 'Описание второй фотографии'
    },
    {
        id: 1,
        imageUrl: cat,
        description: 'Описание первой фотографии'
    },
    {
        id: 2,
        imageUrl: daughter,
        description: 'Описание второй фотографии'
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
    <div className="gallery">
        {photos.map(photo => (
            <PhotoCard key={photo.id} {...photo} />
        ))}
    </div>
);

export default GalleryPage;