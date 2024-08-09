import React from 'react'
function NavMessage() {
  return (
    <li className='nav-item dropdown'>
        <a className='nav-link nav-icon' href="#" data-bs-toggle="dropdown">
            <i className='bi bi-chat-left-text text-white'></i>
            <span className='badge bg-success badge-number'>3</span>
        </a>

        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
            <li className='dropdown-header'>
                You have 3 new messages
        <a href='#'>
            <span className='badge rounder-pill bg-primary p-2 ms-2'>View all</span>
            </a>
            </li>
        <li>
            <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
            <a href='#'>
                <img
                src='assets/images/messages-1.jpg'
                alt=''
                className='rounded-circle'/>
                <div>
                    <h4>John Doe</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>4 hours ago</p>
                </div>
            </a>
        </li>
        <li>
            <hr className='dropdown-divider' />
        </li>
        <li className='message-item'>
            <a href='#'>
                <img
                src='assets/images/messages-2.jpg'
                alt=''
                className='rounded-circle'/>
                <div>
                    <h4>Jane Smith</h4>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>5 hours ago</p>
                </div>
            </a>
        </li>
        <li>
            <hr className='dropdown-divider' />
        </li>
        <li className='dropdown-footer'>
            <a href='#'>See all messages</a>
        </li>
        </ul>
    </li>
  )
}

export default NavMessage
