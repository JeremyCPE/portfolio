import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
//import underline from '../../assets/underline.svg'
const Navbar = () => {

  const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img src={logo} alt="logo"/>
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' href='#home'> <p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<p>___</p>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<p>___</p>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'> <p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<p>___</p>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'> <p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<p>___</p>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'> <p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<p>___</p>:<></>}</li>
        </ul>
        <div className="nav-connect" onClick={()=>setMenu("contact")}><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
    </div>
  )
}

export default Navbar