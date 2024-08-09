import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function DarkLight({ theme, setTheme }) {
    const toggleThemeMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div>
            <div className={`theme-container ${theme}`}>
                <div className="toggle-button">
                <i 
                    className={`bi ${theme === 'light' ? 'bi-toggle-off':'bi-toggle-on'} toggle-icon`} 
                    onClick={toggleThemeMode} 
                    style={{ fontSize: '2rem', color: theme === 'light' ? '#fff':'#000'  ,margin: 'center' ,display:'flex' }} 
                ></i>
                </div>
            </div>
        </div>
    );
}

export default DarkLight;
