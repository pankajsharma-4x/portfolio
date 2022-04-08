import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";

import emailjs from '@emailjs/browser';

import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iovaact",
        "template_zuf7q2s",
        formRef.current,
        "UKd4rhuFiQTti1T52"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 97166828390
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              pankajsharma4x@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              New Delhi , India 
            </div>
            
            <div className="social--icons">
                <a style={{color: darkMode && "#fff"}} className="font--icon " href="https://www.linkedin.com/in/pankaj-sharma-65a0a31a6/" target="_blank"><i class="fab fa-linkedin c-icon linkedin"></i>linkedin</a>
                <a style={{color: darkMode && "#fff"}} className="font--icon" href="https://github.com/pankajsharma-4x" target="_blank"><i class="fab fa-github Github" ></i>Github</a>
                <a style={{color: darkMode && "#fff"}} className="font--icon" href="https://www.hackerrank.com/pankajsharma4x" target="_blank"><i class="fab fa-hackerrank HackerRank"></i>HackerRank</a>
            </div>

          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form action="" ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333" ,color: darkMode && "#fff"}} rows="5" placeholder="Message" name="message" />
            <button >Submit</button>
            {done && alert("✔\nThank You!\nYour Response has been sent.")}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;