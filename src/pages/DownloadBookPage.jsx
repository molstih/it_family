import React from "react";
import {useState} from "react";
import axios from 'axios';
import lukovka from '../images/lukovka.jpg'
import loadApp from '../images/load_app.jpg'
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

    const downloadPolicy = async () => {
        try {
            const response = await axios.get('/api/book/', {
                responseType: 'blob' // Установка типа ответа Blob для скачивания файла
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.download = "policy.txt"; // Имя файла для сохранения
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Ошибка при загрузке:', error);
        }
    };

    return (
        <div>
            <div className="card">
                <img src={lukovka} alt="Луковка" />
                <h3>Скачать первую сказку "Луковка и хвостатый Марсианец"</h3>
                <button className="btn-download" onClick={downloadBook}>Скачать</button>
                <p>"Луковка и Хвостатый Марсианец" — это сказочная история, предназначенная для младших и средних школьников.
                    В книге рассказывается о девочке Луковке, её приключениях и взаимодействии с окружающим миром
                    через призму образования и технологий. Главные герои сталкиваются с различными проблемами,
                    связанными с учебой, взаимоотношениями в семье и развитием творческих навыков.
                    Через юмористические диалоги и интересные сюжетные повороты автор показывает важность дисциплины,
                    любви к обучению и взаимопонимания в семье.
                    Книга также затрагивает тему современных технологий и их применения в повседневной жизни,
                    вдохновляя детей на развитие своих талантов и интересов.</p>
                <p>Эта книга доступна только в формате PDF.</p>
            </div>
            <div className="card">
                <img src={loadApp} alt="Политика конфиденциальности" />
                <h3>Скачать политику конфиденциальности</h3>
                <button className="btn-download" onClick={downloadPolicy}>Скачать</button>
                <p>Скачать политику конфиденциальности мобильной игры на Android: "Приключения кота-детектива"</p>
            </div>
        </div>
    );
};

export default DownloadBookPage