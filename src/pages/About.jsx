import React from "react";
import "../assets/landing.css";
import Navbar from "../layouts/Navbar";
import Faq from "../components/Faq";
import Footer from "../layouts/Footer";

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

const About = () => {
  return (
    <>
      <header className="services-header">
        <Navbar />
        <div
          className="my-services-banner-div container"
          style={{ paddingBottom: "60px" }}
        >
          <div className="services-banner-title">
            <h1>About Us</h1>
            <span className="banner-subtitle-services">
              Solutions Designed For Your Digital Evolution
            </span>
          </div>
        </div>
      </header>
      <section id="about">
        <div
          className="about-container container"
          style={{ alignItems: "center" }}
        >
          <div className="about-content">
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
          </div>
          <div className="about-image">
            <img src="/img/about.png" alt="image" />

          
          </div>
        </div>
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
          <input type="text" placeholder="Enter your email address" />
          <button>Submit</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
