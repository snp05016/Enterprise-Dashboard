import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

// List of sidebar items with their details
const sidebarItems = [
  { 
    name: 'Dashboard',
    id: 'dashboard',
    classname: 'nav-item',
    icon: 'bi bi-grid',
    link: '/',
    children: [] // No children for Dashboard
  },
  {
    name: 'Sales',
    id: 'sales-nav',
    classname: 'nav-item',
    icon: 'bi bi-cash',
    link: '#',
    children: [
      { name: 'Supplier', link: '#' }
    ] // Children for Sales
  },
  {
    name: 'IT',
    id: 'it-nav',
    classname: 'nav-item',
    icon: 'bi bi-window-dash',
    link: '#',
    children: [
      { name: 'Application Form', link: '#' },
      { name: 'Release Form', link: '#' },
      { name: 'Cancellation Form', link: '#' }
    ] // Children for IT
  },
  {
    name: 'Developer',
    id: 'developer-nav',
    classname: 'nav-item',
    icon: 'bi bi-code',
    link: '#',
    children: [
      { name: 'General Tables', link: '#' }
    ] // Children for Developer
  },
  {
    name: 'HR',
    id: 'hr-nav',
    classname: 'nav-item',
    icon: 'bi bi-people',
    link: '/hr', // Update link to HR page route
    children: [] // No children for HR
  },
  {
    name: 'Graphs',
    id: 'graphs-nav',
    classname: 'nav-item',
    icon: 'bi bi-bar-chart',
    link: '/graphs', // Update link to Graphs page route
    children: [
      { name: 'Icon 1', link: '#' },
      { name: 'Icon 2', link: '#' }
    ] // Children for Graphs
  },
  {
    name: 'Document Management',
    id: 'documents-nav',
    classname: 'nav-item',
    icon: 'bi bi-bar-chart',
    link: '#', // Update link to Graphs page route
    children: [
      { name: 'My Documents', link: '/Mydocuments' },
      { name: 'Add Documents', link: '/add-Document' }
    ] // Children for Graphs
  }
];

function SideBar() {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (id) => {
    console.log("Toggling section:", id);
    setOpenSection(openSection === id ? null : id);
  };
  

  return (
    <aside id="sidebar" className='sidebar'>
      <ul className="sidebar-nav" id='sidebar-nav'>
        {/* Loop through sidebar items */}
        {sidebarItems.map((item, index) => (
          <li key={index} className={item.classname}>
            {/* Sidebar item link */}
            <Link to={item.link} className="nav-link" onClick={() => item.children.length > 0 && handleToggle(item.id)}>
              <i className={item.icon}></i>
              <span className='span'>{item.name}</span>
              {/* Display dropdown icon if children */}
              {item.children.length > 0 && (
                <i
                className={`bi bi-chevron-down ms-auto`}
                style={{ transform: openSection === item.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 1s ease-in-out' }}
              ></i>
              
              )}
            </Link>

            {item.children.length > 0 && (
              <ul 
              className="nav-content" 
              style={{
                maxHeight: openSection === item.id ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 1s ease-out'
              }}
            >
                {item.children.map((child, childIndex) => (
                  <li key={childIndex}>
                    <Link to={child.link}>
                      <span>{child.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
