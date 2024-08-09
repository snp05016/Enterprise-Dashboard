import React from 'react'
import profileimg from '../images/face.jpg'
function NavAvatar() {
  return (
    <li className='nav-item dropdown pe-3'>
        <a className='nav-link nav-profile d-flex align-items-center pe-0' href="#" data-bs-toggle="dropdown">
        <img src={profileimg} alt= 'profile' className='rounded-circle' width="25" height="25" />
        <span className='d-none d-md-block dropdown-toggle ps-2'>Sadiq</span>
        </a>

        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
            <li className='dropdown-header'>
                <h6>Sadiq</h6>
                <span>Web Developer</span>
            </li>
        <li>
            <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
            <a className='dropdown-item d-flex align-items-center'
                href='users-profile.html'>

            <span>My Profile</span>
            </a>
        </li>
        <li className='message-item'>
            <a className='dropdown-item d-flex align-items-center'
                href='settings.html'>
            <span>Settings</span>
            </a>
        </li>
        </ul>
    </li>
  )
}

export default NavAvatar
