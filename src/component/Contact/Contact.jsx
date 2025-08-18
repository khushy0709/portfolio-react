import React from 'react'
import'./Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0969804f-9a6c-4cb6-9f5b-801156276ac6E");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='contact-section'>
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I am currently available to take on new projects,so for that reason if you have any inquiries or proposals, feel free to reach out!</p>
            <div className="contact-details">
                <img src={mail_icon} alt="" />
                <p>Email: example@example.com</p>
            </div>
            <div className="contact-details">
                 <img src={call_icon} alt="" />
                <p>Phone: +1234567890</p>
            </div>
            <div className="contact-details">
                <img src={location_icon} alt="" />
                <p>Location: City, Country</p>
            </div>
        </div>
      </div>
      <form onSubmit={onSubmit} className ="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text"placeholder='Enter your name'name='name' />
        <label htmlFor="Your Email"></label>
        <input type="email"placeholder='Enter your email'name='email' />
        <label htmlFor="Your Message"></label>
        <textarea name="message" placeholder='Enter your message'></textarea> 
        <button type='submit' className="contact-submit">Submit now</button>
      </form>
    </div>
  )
}

export default Contact
