import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import AchievePage from "./pages/AchievePage.jsx";
import Footer from "./components/Footer.jsx";
import DownloadBookPage from "./pages/DownloadBookPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";


function App(){
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes className="app-container">
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />}  />
                    <Route path="/achieve" element={<AchievePage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                    <Route path="/book" element={<DownloadBookPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

function App1() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
