import React from 'react'
import { Link } from 'react-router-dom'


const Navbarr = () => {


  return (
    <>
   {/* This is  Navbar  using bootstrap 5 and include router link three filed HOME , USERPROFILE And ADDUSER , this is jsx code  */}

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container px-4">
                <Link className=" navbar-brand" to='/'>CURD Opration</Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="navbar-collapse collapse" id="navbarResponsive" >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item "><Link className='m-1' to='/' >Home</Link></li>
                        <li className="nav-item "><Link className='m-1'  to='/user' >UserProfile</Link></li>
                        <li className="nav-item  "><Link className='m-1'  to='/create'>AddUser</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <br />
        <br />
      
        </>  
       
  
  )
}

export default Navbarr