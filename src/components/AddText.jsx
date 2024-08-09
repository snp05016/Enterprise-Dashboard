import React from 'react'
import './Dashboard.css'
import PageTitle from './PageTitle'
import './Card.css'
import Editnew from './Editnew'
function AddText() {
  return (
    <main className="main" id='main'><PageTitle page='Add text'/>
    <section className="dashboard section">
            <div className="row">
                <div className="col-8">
                <div className="card">
                <Editnew/>
                </div>
                </div>
            </div>  
        </section>
        </main>
  )
}

export default AddText