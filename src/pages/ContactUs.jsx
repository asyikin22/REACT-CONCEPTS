import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <div>
        <p> 📩 You can contact me via email at xxxx@gmail.com </p>

        <p>📞 Or you can reach me at (123) 456-7890</p>

        <p>🏢 Alternatively, you can visit me at my office located in Kuala Lumpur</p>

        <Link to="/">Home Page</Link>
      
    </div>
  )
}

export default ContactUs

