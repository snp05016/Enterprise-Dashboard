import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import DarkLight from './DarkLight';
import Cal from './components/Calendar';
import News from './components/News';
import HrPage from './components/HrPage'; // Ensure this component exists
import Mydocuments from './components/Documents';
import AddDocument from './components/AddDocument';
import AddText from './components/AddText';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  return (
    <Router>
      <Header />
      <SideBar />
      <DarkLight theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hr" element={<HrPage />} />
        <Route path="MyDocuments" element={<Mydocuments/>}/>
        <Route path="/add-document" element={<AddText/>}/>

      </Routes>
      <div className="sidecont">
        <Cal />
        <News />
      </div>
    </Router>
  );
}

export default App;
