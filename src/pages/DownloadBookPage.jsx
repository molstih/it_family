import React from "react";
import {useState} from "react";
import axios from 'axios';
import '../css/book.css'

const DownloadBookPage = () =>  {
    const [bookUrl, setBookUrl] = useState('');

    const downloadBook = async () => {
        try {
            const response = await axios.get('/api/book/', {
                responseType: 'blob' // Установка типа ответа Blob для скачивания файла
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.download = "Lukovka_i_hvostatyi_Marsianets.pdf"; // Имя файла для сохранения
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Ошибка при загрузке:', error);
        }
    };

    return (
        <div className="card">
            <h3>Скачать первую сказку "Луковка и хвостатый Марсианец"</h3>
            <button className="btn-download" onClick={downloadBook}>Скачать</button>
            <p>Эта книга доступна только в формате PDF.</p>
        </div>
    );
};

export default DownloadBookPage