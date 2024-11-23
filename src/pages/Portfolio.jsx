import React, { useState } from "react";
import "../assets/landing.css";
import Navbar from "../layouts/Navbar";
import Faq from "../components/Faq";
import Footer from "../layouts/Footer";
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

const Portfolio = () => {
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
              <span className="sp-span-t">portfolio</span>
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
                  Shopify
                </button>
             
              </li>
              <li>
                <button
                  className={
                    serviceTab === SERVICES_TABS.AI
                      ? "active-tab-services"
                      : ""
                  }
                  onClick={() => setServiceTab(SERVICES_TABS.AI)}
                >
                  AI Integration
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

      <section id="portfolio">
        <div
          className="portfolio-container container"
          style={{
            padding:
              serviceTab === SERVICES_TABS.ALL ||
              serviceTab === SERVICES_TABS.WEB ||
              serviceTab === SERVICES_TABS.DEV
                ? "60px 30px"
                : "20px 30px",
          }}
        >
          <div
            className="portfolio-main-div"
            style={{
              display:
                serviceTab === SERVICES_TABS.ALL ||
                serviceTab === SERVICES_TABS.WEB
                  ? "block"
                  : "none",
            }}
          >
            <div className="portfolio-image">
              <img src="/img/web-des-1.png" alt="" />
            </div>
            <div className="portfolio-desc-div">
              <div className="portfolio-desc-main">
                <h3 className="portfolio-desc-title">VPN App Design</h3>
                <span className="portfolio-desc-subtitle">VPN/Mobile App</span>
              </div>
              <div className="portfolio-desc-icon">
                <button>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="portfolio-main-div"
            style={{
              display:
                serviceTab === SERVICES_TABS.ALL ||
                serviceTab === SERVICES_TABS.WEB
                  ? "block"
                  : "none",
            }}
          >
            <div className="portfolio-image">
              <img src="/img/web-des-4.png" alt="" />
            </div>
            <div className="portfolio-desc-div">
              <div className="portfolio-desc-main">
                <h3 className="portfolio-desc-title">Medical website design</h3>
                <span className="portfolio-desc-subtitle">
                  Website/Landing Page
                </span>
              </div>
              <div className="portfolio-desc-icon">
                <button>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="portfolio-main-div"
            style={{
              display:
                serviceTab === SERVICES_TABS.ALL ||
                serviceTab === SERVICES_TABS.WEB
                  ? "block"
                  : "none",
            }}
          >
            <div className="portfolio-image">
              <img src="/img/web-des-2.png" alt="" />
            </div>
            <div className="portfolio-desc-div">
              <div className="portfolio-desc-main">
                <h3 className="portfolio-desc-title">
                  Finance dashboard design
                </h3>
                <span className="portfolio-desc-subtitle">Finance/Web App</span>
              </div>
              <div className="portfolio-desc-icon">
                <button>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="portfolio-main-div"
            style={{
              display:
                serviceTab === SERVICES_TABS.ALL ||
                serviceTab === SERVICES_TABS.DEV
                  ? "block"
                  : "none",
            }}
          >
            <div className="portfolio-image">
              <img src="/img/web-dev-2.png" alt="" />
            </div>
            <div className="portfolio-desc-div">
              <div className="portfolio-desc-main">
                <h3 className="portfolio-desc-title">Real estate website</h3>
                <span className="portfolio-desc-subtitle">
                  Website/Landing Page
                </span>
              </div>
              <div className="portfolio-desc-icon">
                <button>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="portfolio-main-div"
            style={{
              display:
                serviceTab === SERVICES_TABS.ALL ||
                serviceTab === SERVICES_TABS.WEB
                  ? "block"
                  : "none",
            }}
          >
            <div className="portfolio-image">
              <img src="/img/web-des-3.png" alt="" />
            </div>
            <div className="portfolio-desc-div">
              <div className="portfolio-desc-main">
                <h3 className="portfolio-desc-title">NFT dashboard design</h3>
                <span className="portfolio-desc-subtitle">NFT/Web App</span>
              </div>
              <div className="portfolio-desc-icon">
                <button>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="portfolio-main-div"
            style={{
              display:
                serviceTab === SERVICES_TABS.ALL ||
                serviceTab === SERVICES_TABS.DEV
                  ? "block"
                  : "none",
            }}
          >
            <div className="portfolio-image">
              <img src="/img/web-dev-3.png" alt="" />
            </div>
            <div className="portfolio-desc-div">
              <div className="portfolio-desc-main">
                <h3 className="portfolio-desc-title">Havit Tracker App</h3>
                <span className="portfolio-desc-subtitle">
                  Havit/Mobile App
                </span>
              </div>
              <div className="portfolio-desc-icon">
                <button>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      
        <p
          className="sp-p-services"
          style={{
            display:
              serviceTab !== SERVICES_TABS.ALL &&
              serviceTab !== SERVICES_TABS.WEB &&
              serviceTab !== SERVICES_TABS.DEV
                ? "block"
                : "none",
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
      
      <Footer />
    </>
  );
};

export default Portfolio;
