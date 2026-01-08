import React from 'react'
import { Link } from 'react-router-dom'

const Not_Found = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center px-3">
        <h1 className="display-1 fw-bold text-secondary">404</h1>
        <h4 className="mb-3">Page Not Found</h4>
        <p className="text-muted mb-4">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default Not_Found

