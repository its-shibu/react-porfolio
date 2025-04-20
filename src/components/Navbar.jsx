import React from 'react'
import '../style/style.css'


const Navbar = () => {
    return (
        <>
           
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                        <li className="nav-item">   Hello</li>
                    </ul>
                </div>

            </div>
           </nav>




        </>
    )
}

export default Navbar