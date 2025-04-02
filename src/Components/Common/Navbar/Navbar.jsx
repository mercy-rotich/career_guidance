import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [menu,setMenu]= useState("")
  return (
    <div className='navbar'>
      <div className="logo">
      <Link to="/">PathFinder</Link>
        </div>
      <nav>
<ul className="navbar-menu">
  <li><Link to="/dashboard" onClick={()=>setMenu("dashboard")} className={menu==="dashboard"?"active":""}>Dashboard</Link></li>
  <li><Link to="/assesments" onClick={()=>setMenu("assesments")} className={menu==="assesments"?"active":""}>Assesments</Link></li>
  <li><Link to="/careerexplorer" onClick={()=>setMenu("career")} className={menu==="careerexplorer"?"active":""}>Career Explorer</Link></li>
  <li><Link to="/learning" onClick={()=>setMenu("learning")} className={menu==="learning"?"active":""}>Learning</Link></li>
  <li><Link to="/network" onClick={()=>setMenu("network")} className={menu==="network"?"active":""}>Network</Link></li>
</ul>
      </nav>
      <div className="login-btn">
        <Link to="/signup"><button>Login</button></Link>
      </div>
      <div className="user-profile">
        <span>Alex Johnson</span>
        <div className="user-avatar">AJ</div>
      </div>
    </div>
  )
}

export default Navbar