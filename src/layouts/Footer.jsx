import React, { useState } from "react";
import {motion} from 'framer-motion'
import axios from "axios";
const Footer = () => {
  const [notif , setnotif] = useState(false)
  const [email , setemail] = useState() 

  const subscribe = (e) => {
    e.preventDefault();

    const send = axios.post("https://netsheelemailserver.onrender.com/subscribe" , {email} )


    setnotif(true)

    setTimeout(() => {
      setnotif(false)
    }, 1500);




  }

  return (
    <>
     {notif == true ? <> <div className="notifysub">
      <div className="notifyframe">
        <motion.div initial={{size:0 , opacity:0}} animate={{size:1 , opacity:1} } transition={{duration:1}} className="doneframe"><img src="/img/Done.png" alt="" /></motion.div>
        <div className="succmsg">Thanks for joining!</div>
      </div>
     </div></> : null}
     <footer>
    
    
    <div className="footer-container container">
      <div className="footer-1-div">
        <div className="footer-logo">
          <img src="/img/footer-logo.png" alt="footer-logo" />
        </div>
        <div className="copyright-side-div">
          <p>182-184 High Street North East Ham
          London</p>
        </div>
        <div className="footer-social-media-div">
          <button>
            <i className="fa-brands fa-facebook"></i>
          </button>
          <button>
            <i className="fa-brands fa-linkedin-in"></i>
          </button>
          <button>
            <i className="fa-brands fa-twitter"></i>
          </button>
          <button>
            <i className="fa-brands fa-instagram"></i>
          </button>
        </div>
      </div>
      <div className="footer-2-div">
        <h4>Agency</h4>
        <ul className="footer-ul">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/about">Apply for Job</a>
          </li>
          <li>
            <a href="contact">Contact Us</a>
          </li>
        </ul>
      </div>
     
      <div className="footer-3-div">
        <h4>Services</h4>
        <ul className="footer-ul">
          <li>
            <a href="/services">Graphic Design</a>
          </li>
          <li>
            <a href="/services">UI/UX Designing</a>
          </li>
          <li>
            <a href="/services">Web Development</a>
          </li>
          <li>
            <a href="/services">Shopify Development</a>
          </li>
          <li>
            <a href="/services">Digital Marketing</a>
          </li>
          <li>
            <a href="/services">AI Integration</a>
          </li>
        </ul>
      </div>
      <div className="footer-4-div">
        <h4>Keep in touch</h4>
        <p className="address-footer">{"(919) 191-99191"}</p>
        <p className="address-footer">info@netsheel.com</p>
        <div className="footer-subscribe-div">
          <h4>Subscribe to Newsletter</h4>
          <div className="footer-subscribe-main-div">
            <form onSubmit={(e) => subscribe(e)} ><input onChange={(e) => setemail(e.target.value)} required type="email" placeholder="Enter Email" />
            <button>SUBMIT</button></form>
           

          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright-main-div">
      <p> Copyright © 2024 Netseel all rights reserved. </p>
    </div>
  </footer>
    </>
  
  );
};

export default Footer;
