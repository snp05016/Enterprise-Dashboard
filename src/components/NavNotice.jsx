import React from 'react';

const NavNotice = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell text-white"></i>
        <span className="badge bg-primary badge-number">4</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications ">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
          </a>
        </li>
        <hr className="dropdown-divider" />

        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis odit</p>
            <p>30 min. ago</p>
          </div>
        </li>
        <hr className="dropdown-divider" />

        <li className="notification-item">
          <i className="bi bi-x-circle text-danger"></i>
          <div>
            <h4>Atque rerum nesciunt</h4>
            <p>Quae dolorem earum veritatis odit</p>
            <p>1 hr. ago</p>
          </div>
        </li>
        <hr className="dropdown-divider" />

        <li className="notification-item">
          <i className="bi bi-check-circle text-success"></i>
          <div>
            <h4>Sit rerum fuga</h4>
            <p>Quae dolorem earum veritatis odit</p>
            <p>2 hr. ago</p>
          </div>
        </li>
        <hr className="dropdown-divider" />

        <li className="notification-item">
          <i className="bi bi-info-circle text-primary"></i>
          <div>
            <h4>Qui molestias delectus</h4>
            <p>Quae dolorem earum veritatis odit</p>
            <p>5 hr. ago</p>
          </div>
        </li>
        <hr className="dropdown-divider" />

        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>
      </ul>
    </li>
  );
};

export default NavNotice;
