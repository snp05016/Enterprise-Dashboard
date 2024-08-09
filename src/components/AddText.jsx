import React from 'react'
import './Dashboard.css'
import PageTitle from './PageTitle'
import './Card.css'
import Stopwatch from './StopLap'
import '../App.css'
import Edit from './Edit'

function AddText() {
  return (
    <main className="main" id='main'><PageTitle page='Add text'/>
    <section className="dashboard section">
            <div className="row">
                <div className="col-8">
                <div className="card">
                    hello
                    <Edit/>
                </div>
                <div className="sidecont">
                    <div className='stopwatch-container'>
                    <Stopwatch/>
                    </div>
                </div>
                </div>
            </div>  
        </section>
        </main>
  )
}

export default AddText