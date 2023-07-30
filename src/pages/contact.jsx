import React from 'react';
import NavBar from '../layouts/NavBar';
import { Typewriter } from 'react-simple-typewriter';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ylxrj1b', 'template_ij0v1t9', form.current, 'Jd9EaEqe6uEqD4kTx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
   


  return (
    <div>
      <NavBar />
    <div>
        <h3>CONTACT</h3>
        <p style={{ fontFamily: "Courier", fontWeight: "bold" }} >
          <Typewriter
            words={["Feel free to contact me!", "Let's get in Touch!"]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>  
      </div>
      <div >
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </div>       
  );
      
};
export default Contact;