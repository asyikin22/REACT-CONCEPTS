import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <p>Uh Oh, there's nothing here 🫠 </p>

      <Link to="/">Home Page</Link>
    </div>
  )
}

export default ErrorPage


