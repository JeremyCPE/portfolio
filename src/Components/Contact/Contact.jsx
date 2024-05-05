import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
const Contact = () => {

return (
<div className="contact">
    <div className="contact-title">
        <h1>Get in touch</h1>
        <img src="" alt="" />
    </div>
    <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Lorem ipsum zagzrgtehehfxdyjf</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>mohariry.jeremy@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Seoul, Korea</p>
                </div>
            </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your email</label>
            <input type="email" name="email" placeholder='Enter your email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
    </div>
</div>  
)
}

export default Contact