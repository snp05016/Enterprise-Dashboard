import React ,{useState} from 'react'
import './Dashboard.css'
import PageTitle from './PageTitle'
import './Card.css'
import Stopwatch from './StopLap'
import '../App.css'
import Edit from './Edit'

function AddText() {
    const [theme, setTheme] = useState('light');
    const [clientName, setClientName] = useState('Client Name');
    const [isEditorEnabled, setIsEditorEnabled] = useState(false);
    const [htmlContent, setHtmlContent] = useState('');
    const [isTimerLocked, setIsTimerLocked] = useState(false);
    const [password, setPassword] = useState('');
    const [showPasswordInput, setShowPasswordInput] = useState(false);
    const correctPassword = '1234'; // Define your password here

  const handleClientNameChange = (event) => {
    setClientName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleLock = () => {
    if (isTimerLocked) {
      setShowPasswordInput(true);
    } else {
      setIsTimerLocked(true);
    }
  };

  const checkPassword = () => {
    if (password === correctPassword) {
      setIsTimerLocked(false);
      setShowPasswordInput(false);
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };
    return (
    <main className="main" id='main'><PageTitle page='Edit Your Document here'/>
    <section className="dashboard section">
            <div className="row">
                <div className="col-8">
                <div className={`card ${!isEditorEnabled ? 'locked' : ''}`}>
                    <Edit setHtmlContent={setHtmlContent} />
                </div>
                <div className="sidecont">
                    <div className='stopwatch-container'>
                    <Stopwatch  setEditorEnabled={setIsEditorEnabled} isTimerLocked={isTimerLocked}/>
                    </div>
                </div>
                </div>
            </div>  
        </section>
        </main>
  )
}

export default AddText