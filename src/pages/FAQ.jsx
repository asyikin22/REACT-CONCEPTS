import React from 'react'
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <div>

        <h4>What is your return policy?</h4>
        <p>Returns are accepted within 30 days if items are in original condition.</p>

        <h4>How can I track my order?</h4>
        <p>You'll receive a tracking number via email after your order ships.</p>

        <h4>What payment methods do you accept?</h4>
        <p>We accept major credit cards, PayPal, Apple Pay, and Google Pay.</p>

        <Link to="/">Home Page</Link>
    </div>
  )
}

export default FAQ

