import React, { useState } from "react";
import "../assets/landing.css";
import Navbar from "../layouts/Navbar";
import Faq from "../components/Faq";
import Footer from "../layouts/Footer";
import Testimonials from "../components/Testimonials";
import { Link, useNavigate } from "react-router-dom";
import Workexm from "../components/Workexm";
import {motion} from 'framer-motion'
import axios from "axios";


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


const Landing = () => {
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
  const redirect = useNavigate();

  return (
    <>
      <header className="landing-header my-special-header">
      {notif == true ? <> <div className="notifysub">
      <div className="notifyframe">
        <motion.div initial={{size:0 , opacity:0}} animate={{size:1 , opacity:1} } transition={{duration:1}} className="doneframe"><img src="/img/Done.png" alt="" /></motion.div>
        <div className="succmsg">Thanks for joining!</div>
      </div>
     </div></> : null}
        <Navbar />
        {/* <div className="banner-div">
          <div className="banner-container container">
            <div className="banner-content">
              <h1>Netseel Innovate Your Digital World</h1>
              <p>
                We specialize in blending, technology, and strategic thinking to
                deliver comprehensive solutions that elevate your digital
                presence.
              </p>
              <div className="banner-buttons-container">
                <button className="try-btn">Try free Trial</button>
                <div className="play-video-div">
                  <div className="video-icon">
                    <div className="center-point"></div>
                  </div>
                  <div className="text">Play Video</div>
                </div>
              </div>
            </div>
            <div className="banner-img">
              <img src="/img/banner.png" alt="Banner Image" />
            </div>
          </div>
        </div> */}
        <div className="my-banner-div">
          <div className="my-banner-title">
            <h1>Netseel Innovate Your Digital World</h1>
            <img src="/img/Vector.png" alt="Vector" />
          </div>
          <p className="p">
            We specialize in blending, technology, and strategic thinking to
            deliver comprehensive solutions that elevate your digital presence.
          </p>
          <Link to="/contact" className="contact-btn-header">
            Contact Us
          </Link>
          <div className="statistics-div">
            <div className="statistics">
              <h2>20+</h2>
              <hr className="statistics-hr" style={{ background: "#feb60d" }} />
              <p>Professional Team</p>
            </div>
            <div className="statistics">
              <h2>240+</h2>
              <hr
                className="statistics-hr sp-hr"
                style={{ background: "#9771ff" }}
              />
              <p>Projects Completed</p>
            </div>
            <div className="statistics">
              <h2>100%</h2>
              <hr className="statistics-hr" style={{ background: "#4f76fa" }} />
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </header>
      <section id="services">
        <h4 className="sec-subtitle">Our All Services</h4>
        <h2 className="sec-title">
          Solutions Designed for your
          <span className="sp-span"> digital evolution</span>
        </h2>
        <div className="container services-container">
          <div className="service-div">
            <div className="service-logo">
              <img src="/img/graphics.png" alt="graphics design" />
            </div>
            <h3 className="service-title">Graphic Design</h3>
            <button
              className="read-more-b"
              onClick={() => redirect("/services/1")}
            >
              Read More
            </button>
          </div>
          <div className="service-div">
            <div className="service-logo">
              <img src="/img/ul.png" alt="graphics design" />
            </div>
            <h3 className="service-title">UI/UX Designing</h3>
            <button
              onClick={() => redirect("/services/2")}
              className="read-more-b"
            >
              Read More
            </button>
          </div>
          <div className="service-div">
            <div className="service-logo">
              <img src="/img/web.png" alt="graphics design" />
            </div>
            <h3 className="service-title">Wev Development</h3>
            <button
              onClick={() => redirect("/services/3")}
              className="read-more-b"
            >
              Read More
            </button>
          </div>
          <div className="service-div">
            <div className="service-logo">
              <img src="/img/shopify.png" alt="graphics design" />
            </div>
            <h3 className="service-title">Shopify</h3>
            <button
              onClick={() => redirect("/services/4")}
              className="read-more-b"
            >
              Read More
            </button>
          </div>
          <div className="service-div">
            <div className="service-logo">
              <img src="/img/marketing.png" alt="graphics design" />
            </div>
            <h3 className="service-title">Digital Marketing</h3>
            <button
              onClick={() => redirect("/services/5")}
              className="read-more-b"
            >
              Read More
            </button>
          </div>
          <div className="service-div">
            <div className="service-logo">
              <img src="/img/ai.png" alt="graphics design" />
            </div>
            <h3 className="service-title">AI Integration</h3>
            <button
              onClick={() => redirect("/services/5")}
              className="read-more-b"
            >
              Read More
            </button>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="about-container container">
          <div className="about-content">
            <div className="about-title">
              <img src="/img/about-hr.png" alt="image" />
              <h2>About Us</h2>
            </div>
            <span className="about-subtitle">Discover Our Digital Story</span>
            <h3 className="about-subtitle-2">
              Elevating Brands, Empowering Growth
            </h3>
            <p className="about-p-1">
              Netseel is a dynamic force in the digital realm, boasting a
              talented team of over 20 professionals who have completed more
              than 240 projects to date, including comprehensive Shopify store
              setups. With a relentless pursuit of excellence, we specialize in
              crafting bespoke solutions that elevate brands and drive growth.
              From graphic design to web development, digital marketing, and AI
              integration, our comprehensive range of services is designed to
              meet the diverse needs of our clients. With a client-centric
              approach and a proven track record of delivering tangible results,
              Netseel is your trusted partner in navigating the ever-evolving
              digital landscape.
            </p>
            <br />
            <p className="about-p-2">
              Welcome to Netseel, where innovation and expertise converge to
              create extraordinary digital experiences, including seamless
              Shopify store setups tailored to your unique business needs.
            </p>
            <button className="about-read-more">Read More</button>
          </div>
          <div className="about-image">
            <img src="/img/about.png" alt="image" />


          </div>
        </div>
      </section>
      <section id="quality">
        <div className="container quality-container">
          <div className="quality-title-main">
            <h2>Why Choose Netseel</h2>
            <span id="quality-subtitle">
              Elevating Your Digital Evolution, Seamlessly Integrated
            </span>
          </div>
          <div className="quality-main-div">
            <div className="quality-card">
              <div className="quality-icon">
                <img src="/img/team.png" alt="" />
              </div>
              <div className="quality-title">Professional Team</div>
              <div className="quality-level">20+</div>
            </div>
            <div className="quality-card">
              <div className="quality-icon">
                <img src="/img/project.png" alt="" />
              </div>
              <div className="quality-title">Projects Completed</div>
              <div className="quality-level">240+</div>
            </div>
            <div className="quality-card active-quality">
              <div
                className="quality-icon"
              
              >
                <img src="/img/satisblue.png" alt="" />
              </div>
              <div className="quality-title">Client Satisfaction</div>
              <div className="quality-level">100%</div>
            </div>
            <div className="quality-card">
              <div className="quality-icon">
                <img style={{width:'30px', height:"30px"}} src="/img/port.png" alt="" />
              </div>
              <div className="quality-title">Portfolios</div>
              <div className="quality-level">200+</div>
            </div>
          </div>
        </div>
      </section>
      <section id="approach">
        <div className="quality-title-main">
          <h2>Our Proven Approach</h2>
          <span id="quality-subtitle">
            Elevating Your Digital Evolution, Seamlessly Integrated
          </span>
        </div>
        <div className="approach-container-big container">
          <div className="approach-container">
            <div className="approach-div">
              <div className="approach-icon">
                <img src="/img/require.png" alt="" />
              </div>
              <div className="approach-step">Step 1</div>
              <div className="approach-title">Understand Requirements</div>
              <div className="approach-desc">
                Conduct thorough consultations to gather and comprehend client
                needs, goals, and project specifications.
              </div>
            </div>
            <div className="approach-div">
              <div className="approach-icon">
                <img src="/img/i-design.png" alt="" />
              </div>
              <div className="approach-step">Step 2</div>
              <div className="approach-title">Strategic Palning</div>
              <div className="approach-desc">
                Develop customized strategies tailored to client objectives and
                market insights.
              </div>
            </div>
            <div className="approach-div">
              <div className="approach-icon">
                <img src="/img/i-design.png" alt="" />
              </div>
              <div className="approach-step">Step 3</div>
              <div className="approach-title">Design</div>
              <div className="approach-desc">
                Create visually compelling brand assets and intuitive user
                interfaces.
              </div>
            </div>
            <div className="approach-div">
              <div className="approach-icon">
                <img src="/img/i-dev.png" alt="" />
              </div>
              <div className="approach-step">Step 4</div>
              <div className="approach-title">Development</div>
              <div className="approach-desc">
                Implement cutting-edge technologies to build responsive and
                scalable digital solutions.
              </div>
            </div>
            <div className="approach-div">
              <div className="approach-icon">
                <img src="/img/deploy.png" alt="" />
              </div>
              <div className="approach-step">Step 5</div>
              <div className="approach-title">Deployment and Support</div>
              <div className="approach-desc">
                Ensure smooth transition from development to live environment
                and provide ongoing maintenance and support services.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
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

export default Landing;
