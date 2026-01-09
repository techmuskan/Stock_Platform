import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container-fluid border-bottom sticky-top" style={{backgroundColor:"#ffffff"}}>
      <nav className="navbar navbar-expand-lg navbar-light d-flex " style={{ padding: "0.8rem 12rem " }}>
        <Link className="navbar-brand" to="/">
          <img src="media/logo.svg" alt="logo" style={{ width: "25%", maxWidth:"100%" }} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">


          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 ">
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Signup <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Products <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" >
                  <i class="fa fa-solid fa-bars fa-lg"></i><span className="visually-hidden">(current)</span>
                </Link>
              </li>


            </ul>
          </form>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  )
}

export default Navbar
