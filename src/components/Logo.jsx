import React from 'react';
import './logo.css';
import cubezix from '../assets/cubezix.png';

const Logo = () => {
    const handleToggleSidebar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

    return (
        <div className='d-flex align-items-center justify-content-between'>
            <a href='/' className='logo d-flex align-items-center'>
                <span className='d-none d-lg-block'>
                    <img src={cubezix} width="50" height="50px" alt="Logo" />
                </span>
            </a>
            <i
                className='bi bi-list toggle-sidebar-btn'
                onClick={handleToggleSidebar}
            ></i>
        </div>
    );
};

export default Logo;
