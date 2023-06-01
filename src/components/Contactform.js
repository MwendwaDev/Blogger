import emailjs from "@emailjs/browser";
import "./Contactstyles.css";
import React, { useRef } from "react";





const Contactform = () => {

  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zy8h1ov', 
    'template_koyqd6u',
     form.current, 
     'psmoT0SViu5GJ_IMO')
      .then((result) => {
          console.log(result.text);
          console.log("message was sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button className="btn" type="submit" placeholder="Send">Submit</button> 
    </form>
    
    </div>
  )
}




export default Contactform;