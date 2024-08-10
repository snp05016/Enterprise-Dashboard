import React,{useState,useEffect} from 'react'
import './PageTitle.css'
import DarkLight from '../DarkLight'
function PageTitle({page}) {
  
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
        <> 
        <DarkLight theme={theme} setTheme={setTheme} />
        <div className={`pagetitle ${theme}`}>
          <h1 className={`h1page ${theme}`}>{page}</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">
                  <i className={`bi bi-house-door ${theme}`}></i>
                </a>
              </li>
              <li className={`breadcrumb-item active h1page ${theme}`}>{page}</li>
            </ol>
          </nav>
        </div> 
        </>  
  )
}

export default PageTitle
