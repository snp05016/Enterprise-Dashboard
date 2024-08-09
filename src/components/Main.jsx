import React from 'react'
import './Main.css'
import PageTitle from './PageTitle'
import Dashboard from './Dashboard'
// import PageTitle from './PageTitle'
function Main() {
  return (
    <main className="main" id='main'><PageTitle page="Dashboard"/>
    <Dashboard/>
    </main>
  )
}

export default Main
