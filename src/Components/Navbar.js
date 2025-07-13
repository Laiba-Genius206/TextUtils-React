import React from 'react';
// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function Navbar(props) {
   
  return (
     <div>
      <nav className = {`navbar-expand-lg navbar bg-${props.mode} data-bs-theme={props.mode}`}>
        <div className ="container-fluid">
          <a className ={`navbar-brand form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} href="#">{props.title}</a>
          <button
            className ="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className ="navbar-toggler-icon"></span>
          </button>
          <div className ="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
              <li className ="nav-item">
                {/* <Link className ={`nav-link active form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link> */}
                <a className ={`nav-link active form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" href="#">Home</a>
              </li>
              <li className ="nav-item">
                {/* <Link className ={`nav-link form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/about">{props.aboutText}</Link> */}
              </li>
            </ul>
             <div className ={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
                 <input className="form-check-input mx-1" onClick={props.toggleMode} type="checkbox" value="" id="checkNativeSwitch" switch/>
                 <label className="form-check-label mx-1" htmlhtmlFor="checkNativeSwitch">
                   {props.mode === 'light'? 'Dark Mode': 'Light Mode'}
                 </label>
              </div>  
          </div>
        </div>
      </nav>
     </div>
  );
}

// Navbar.propTypes = {
//   title: PropTypes.string,
//   aboutText: PropTypes.string
// };

// Navbar.defaultProps = {
//   title: 'Set title here',
  // aboutText: "About text here"
// };



// React ke latest version ke mutabic DefaultProps Syntax

// function Navbar({title = "Default Title"}) {
//   return <h1>{title}</h1>;
// }

