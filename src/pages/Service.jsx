import React, { useState } from "react";
import "../assets/landing.css";
import Navbar from "../layouts/Navbar";
import Faq from "../components/Faq";
import Footer from "../layouts/Footer";
import { useNavigate } from "react-router-dom";
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

const SERVICES_TABS = {
  ALL: "all",
  UI: "ui",
  WEB: "web",
  GRAPHIC: "graphic",
  DEV: "dev",
  SHOPIFY: "shopify",
};

const Service = () => {
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
  const [serviceTab, setServiceTab] = useState(SERVICES_TABS.ALL);
  const redirect = useNavigate();

  return (
    <>
      <header className="services-header">
      {notif == true ? <> <div className="notifysub">
      <div className="notifyframe">
        <motion.div initial={{size:0 , opacity:0}} animate={{size:1 , opacity:1} } transition={{duration:1}} className="doneframe"><img src="/img/Done.png" alt="" /></motion.div>
        <div className="succmsg">Thanks for joining!</div>
      </div>
     </div></> : null}
        <Navbar />
        <div className="my-services-banner-div container">
          <div className="services-banner-title">
            <h1>
              Let's a have a look at Our{" "}
              <span className="sp-span-t">Services</span>
            </h1>
            <span className="banner-subtitle-services">
              Solutions Designed For Your Digital Evolution
            </span>
          </div>

          <div className="services-banner-tab">
            <ul className="services-tab-ul">
              <li>
                <button
                  className={
                    serviceTab === SERVICES_TABS.ALL
                      ? "active-tab-services"
                      : ""
                  }
                  onClick={() => setServiceTab(SERVICES_TABS.ALL)}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className={
                    serviceTab === SERVICES_TABS.UI ? "active-tab-services" : ""
                  }
                  onClick={() => setServiceTab(SERVICES_TABS.UI)}
                >
                  UI/UX
                </button>
              </li>
              <li>
                <button
                  className={
                    serviceTab === SERVICES_TABS.WEB
                      ? "active-tab-services"
                      : ""
                  }
                  onClick={() => setServiceTab(SERVICES_TABS.WEB)}
                >
                  Web Design
                </button>
              </li>
              <li>
                <button
                  className={
                    serviceTab === SERVICES_TABS.GRAPHIC
                      ? "active-tab-services"
                      : ""
                  }
                  onClick={() => setServiceTab(SERVICES_TABS.GRAPHIC)}
                >
                  Graphic Design
                </button>
              </li>
              <li>
                <button
                  className={
                    serviceTab === SERVICES_TABS.DEV
                      ? "active-tab-services"
                      : ""
                  }
                  onClick={() => setServiceTab(SERVICES_TABS.DEV)}
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  className={
                    serviceTab === SERVICES_TABS.SHOPIFY
                      ? "active-tab-services"
                      : ""
                  }
                  onClick={() => setServiceTab(SERVICES_TABS.SHOPIFY)}
                >
                  Shpopify
                </button>
              </li>
            </ul>
            <button className="services-filter-btn">
              Filters
              <img src="/img/fillter.png" alt="filter icon" />
            </button>
          </div>
        </div>
      </header>
      <section id="services">
        <div className="container services-container">
          <div
            className="service-div"
            style={{
              display:
                serviceTab === SERVICES_TABS.ALL ||
                serviceTab === SERVICES_TABS.GRAPHIC
                  ? "flex"
                  : "none",
            }}
          >
            <div className="service-logo">
              <img src="/img/graphics.png" alt="graphics design" />
            </div>
            <h3 className="service-title">Graphic Design</h3>
            <button onClick={() => redirect("1")} className="read-more-b">
              Read More
            </button>
          </div>
          <div
            className="service-div"
            style={{
              display:
                serviceTab === SERVICES_TABS.ALL ||
                serviceTab === SERVICES_TABS.UI
                  ? "flex"
                  : "none",
            }}
          >
            <div className="service-logo">
              <img src="/img/ul.png" alt="graphics design" />
            </div>
            <h3 className="service-title">UI/UX Designing</h3>
            <button className="read-more-b" onClick={() => redirect("2")}>
              Read More
            </button>
          </div>
          <div
            className="service-div"
            style={{
              display:
                serviceTab === SERVICES_TABS.ALL ||
                serviceTab === SERVICES_TABS.DEV
                  ? "flex"
                  : "none",
            }}
          >
            <div className="service-logo">
              <img src="/img/web.png" alt="graphics design" />
            </div>
            <h3 className="service-title">Wev Development</h3>
            <button className="read-more-b" onClick={() => redirect("3")}>
              Read More
            </button>
          </div>
          <div
            className="service-div"
            style={{
              display:
                serviceTab === SERVICES_TABS.ALL ||
                serviceTab === SERVICES_TABS.SHOPIFY
                  ? "flex"
                  : "none",
            }}
          >
            <div className="service-logo">
              <img src="/img/shopify.png" alt="graphics design" />
            </div>
            <h3 className="service-title">Shopify</h3>
            <button className="read-more-b" onClick={() => redirect("4")}>
              Read More
            </button>
          </div>
          <div
            className="service-div"
            style={{
              display: serviceTab === SERVICES_TABS.ALL ? "flex" : "none",
            }}
          >
            <div className="service-logo">
              <img src="/img/marketing.png" alt="graphics design" />
            </div>
            <h3 className="service-title">Digital Marketing</h3>
            <button className="read-more-b" onClick={() => redirect("5")}>
              Read More
            </button>
          </div>
          <div
            className="service-div"
            style={{
              display:
                serviceTab === SERVICES_TABS.ALL ||
                serviceTab === SERVICES_TABS.DEV
                  ? "flex"
                  : "none",
            }}
          >
            <div className="service-logo">
              <img src="/img/ai.png" alt="graphics design" />
            </div>
            <h3 className="service-title">AI Integration</h3>
            <button className="read-more-b" onClick={() => redirect("6")}>
              Read More
            </button>
          </div>
        </div>
        <button
          style={{
            display: serviceTab === SERVICES_TABS.WEB ? "none" : "block",
          }}
          className="load-more-services"
        >
          Load More
        </button>
        <p
          className="sp-p-services"
          style={{
            display: serviceTab === SERVICES_TABS.WEB ? "block" : "none",
          }}
        >
          No services found
        </p>
      </section>

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

export default Service;
