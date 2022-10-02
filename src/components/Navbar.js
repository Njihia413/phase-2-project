import React from "react";

function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container container-fluid">
                <a className="navbar-brand" href="/">HotNewsAPI</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>      
                </button>
                
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <ul className="navbar-nav nav-right">
                        <li className="nav-item">
                            <a className="nav-link" href="/technology">technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/health">health</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/science">science</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/business">Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sports">sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/entertainment">entertainment</a>
                        </li>
                    </ul>
                 </div>
            </div>
        </nav>
    )
}

export default Navbar;