import React from 'react'

function Contact() {
  return (
    <div className='contact'>
        
            <h1>Contact Us</h1>
            <form id='contact-form'>
                <label htmlFor="name">Full Name</label>
                <input name='name' placeholder='Enter full name..' type="text" />
                <label htmlFor="email">E-mail</label>
                <input name='mail' placeholder='Enter an mail..' type="email" />
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder='Enter your message...'></textarea>
                <button type='submit'>Send Message</button>
            </form>
        
    </div>
  )
}

export default Contact