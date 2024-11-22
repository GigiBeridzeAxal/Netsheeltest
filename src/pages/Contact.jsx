import React, { useState } from "react";
import "../assets/landing.css";
import Navbar from "../layouts/Navbar";
import Faq from "../components/Faq";
import Footer from "../layouts/Footer";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import axios from "axios";
import {motion} from 'framer-motion'

const faqData = [
  {
    id: 1,
    title: "What services does Netseel offer?",
    desc: `Netseel offers a comprehensive range of digital services, including graphic design, web design and development, digital marketing, Shopify
    store setup, AI integration, and more. Our goal is to provide tailored solutions to meet the diverse needs of our clients.`,
  },
  {
    id: 2,
    title: "How experienced is the team at Netseel?",
    desc: `Netseel offers a comprehensive range of digital services, including graphic design, web design and development, digital marketing, Shopify
    store setup, AI integration, and more. Our goal is to provide tailored solutions to meet the diverse needs of our clients.`,
  },
  {
    id: 3,
    title: "Can Netseel help with website maintenance and updates?",
    desc: `Netseel offers a comprehensive range of digital services, including graphic design, web design and development, digital marketing, Shopify
    store setup, AI integration, and more. Our goal is to provide tailored solutions to meet the diverse needs of our clients.`,
  },
  {
    id: 4,
    title: "What industries does Netseel serve?",
    desc: `Netseel offers a comprehensive range of digital services, including graphic design, web design and development, digital marketing, Shopify
    store setup, AI integration, and more. Our goal is to provide tailored solutions to meet the diverse needs of our clients.`,
  },
  {
    id: 5,
    title: "How can I get started with Netseel?",
    desc: `Netseel offers a comprehensive range of digital services, including graphic design, web design and development, digital marketing, Shopify
    store setup, AI integration, and more. Our goal is to provide tailored solutions to meet the diverse needs of our clients.`,
  },
];




const Contact = () => {
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
  
   
const [notify , setnotify] = useState(false)
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    ideas: "",
  });

  const handleChange = (e) => {
    setUser((prevUser) => {
      return { ...prevUser, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("wadaw")
    const name = user.name
    console.log(name)
    const phone = user.phone
    const email = user.email
    const ideas = user.ideas
    const sendemail = axios.post("https://netsheelemailserver.onrender.com" , {name , phone , email, ideas})
    if(sendemail){
      setnotify(true)

    }
    setTimeout(() => {
      setnotify(false)
    }, 1500);
  };
  return (
    <>
     {notify == true ? <> <div className="notify">
      <div className="notifyframe">
        <motion.div initial={{size:0 , opacity:0}} animate={{size:1 , opacity:1} } transition={{duration:1}} className="doneframe"><img src="/img/Done.png" alt="" /></motion.div>
        <div className="succmsg">Your message has been sent successfully</div>
      </div>
     </div></> : null}
     {notif == true ? <> <div className="notifysub">
      <div className="notifyframe">
        <motion.div initial={{size:0 , opacity:0}} animate={{size:1 , opacity:1} } transition={{duration:1}} className="doneframe"><img src="/img/Done.png" alt="" /></motion.div>
        <div className="succmsg">Thanks for joining!</div>
      </div>
     </div></> : null}
    


      <header className="landing-header services-header">
        <Navbar />
        <div className="services-banner-title">
          <h1>
            Let's reach to us, <span className="sp-span-t">Contact</span>
          </h1>
          <span className="banner-subtitle-services">
            Solutions Designed For Your Digital Evolution
          </span>
        </div>
        <section id="contact " className="contactsection">

          <div className="contactframe">


          <div className="contactinfo">
            <label ><img width={150} src="/img/logo.png" alt="" /></label>
            <div className="desc">Let's Create, Collaborate, and Innovate Together!
            </div>
            <div className="connectwithme">
              <div className="connectittle">Connect with us on social media</div>
              <div className="socialmedia socialconnect">        <div className="footer-social-media-div">
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
        </div></div>
            </div>
          </div>



          <form  className="container contactcontainer form-container" onSubmit={handleSubmit}>
            <div className="input-div">
<img src="/img/User.png" width={30} alt="" />
  

              <input required
              placeholder="Full Name"
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-div">
            <img src="/img/Phone.png" width={30} alt="" />
              <input required
                placeholder="Mobile Number"
                type="number"
                name="phone"
                id="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
            <div className="input-div">
            <img src="/img/Email.png" width={30} alt="" />
              <input required
                placeholder="Email Adress"
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="sp-input-div">
              <select required name="type" id="type">
                <option value="ui">Graphic Design</option>
                <option value="ui">Shopify</option>
                <option value="ui">Digital Marketing</option>
                <option value="ui">UI/UX</option>
                <option value="ui">Web Design</option>
                <option value="ui">Web Development</option>
                <option value="ui">Ai Integration</option>
              </select>
            </div>
            <div className="input-div">

              <textarea required
              placeholder="Enter Your Message Here"
                name="ideas"
                id="ideas"
                value={user.ideas}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="btn-div-form">

              <button type="submit">Send Message</button>
            </div>
          </form>
          </div>
        </section>
        
      </header>
      

      <section id="faqs">
        <h4 className="sec-subtitle">FAQ</h4>
        <h2 className="sec-title faq-title-section">
          Frequently Asked
          <span className="sp-span"> Questions</span>
        </h2>
        <div className="faqs-container container">
          {faqData.map((data) => (
            <Faq title={data.title} desc={data.desc} key={data.id} />
          ))}
        </div>
      </section>
      <section id="newsletter">
        <h2 className="newsletter-title-sec">Subscribe To Our Newsletter</h2>
        <div className="newsletter-div-main container">
          <form onSubmit={(e) => subscribe(e)}>
          <input required   onChange={(e) => setemail(e.target.value)} type="email" placeholder="Enter your email address" />
          <button>Submit</button>
         

          </form>

        </div>
        
      </section>
      
      <Footer />
      
    </>
  );
};

export default Contact;
