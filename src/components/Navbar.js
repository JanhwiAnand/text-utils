import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
// import About from './components/About'


export default function Navbar(props) {
  return (
   
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.start}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Contact">Contact us</Link>
        </li>  
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    
  )
}
//to use proptypes
//our 1st prop used is start
//here proptype used to say that start shout accept string
//error will come i in place of TextUtils(passed in start), a number will  be passed
Navbar.propTypes= {start:PropTypes.string.isRequired}
//in place of string objects can be passed,arrays also can be passed, numbers etc

//default props can also be set
Navbar.defaultProps={
  start:"Always there to help"
}
//here default props would be displayed when we will not pass any value