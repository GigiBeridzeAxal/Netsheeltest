import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Faq from "../components/Faq";
import "../assets/singleservice.css";
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

const servicesData = [
  {
    id: 1,
    title: "Graphic Design",
    services:["Logo Design" , "Brand Identify Design" , "Social Media Graphics" , "Ilustrations"],
    desc: "Learn the fundamentals of graphic design, covering topics such as typography,  and Adobe Creative   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cum saepe, aliquid ullam quis odio quisquam quidem quo illo odit?",
    benefits: [
      "Lorem Ipsum color",
      "Lorem color I",
      "dummy text",
      "Benefit Comes",
      "On time deleviry",
    ],
    img: "/img/graphicdesign.png",
  },
  {
    id: 2,
    title: "UI/UX Designing",
    services:["Wire Framing and Prototyping" , "User Research And Testing" , "Mobile App Design" , "Web Interface Design"],
    desc: "This course covers the principles of user interface (UI) and user experience (UX) design,  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cum saepe, aliquid ullam quis odio quisquam quidem quo illo odit?",
    benefits: [
      "Lorem Ipsum color",
      "Lorem color I",
      "dummy text",
      "Benefit Comes",
      "On time deleviry",
    ],
    img: "/img/uiandux.png",
  },
  {
    id: 3,
    title: "Web Development",
    services:["Front-End Development" , "Back-End Development" , "Full-Stack Development" , "E-comercee Website "],
    desc: "Learn HTML, CSS, and JavaScript to build dynamic and responsive websites, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cum saepe, aliquid ullam quis odio quisquam quidem quo illo odit?",
    benefits: [
      "Lorem Ipsum color",
      "Lorem color I",
      "dummy text",
      "Benefit Comes",
      "On time deleviry",
    ],
    img: "/img/webdevelopment.png",
  },
  {
    id: 4,
    title: "Shopify",
    services:["Shopify Store Setup" , "Custom Theme Development" , "Shopify App Integration" , "Store Optimization"],
    desc: "Learn the fundamentals of graphic design, covering topics such as typography,  and Adobe Creative . Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cum saepe, aliquid ullam quis odio quisquam quidem quo illo odit?",
    benefits: [
      "Lorem Ipsum color",
      "Lorem color I",
      "dummy text",
      "Benefit Comes",
      "On time deleviry",
    ],
    img: "/img/shopifyexpets.png",
  },
  {
    id: 5,
    title: "Digital Marketing",
    services:["Search Engine Optimization" , "Social Media Marketing" , "Email Marketing" , "Content Marketing"],
    desc: "This course covers the principles of user interface (UI) and user experience (UX) design,  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cum saepe, aliquid ullam quis odio quisquam quidem quo illo odit?",
    benefits: [
      "Lorem Ipsum color",
      "Lorem color I",
      "dummy text",
      "Benefit Comes",
      "On time deleviry",
    ],
    img: "/img/digitalmarketing.png",
  },
  {
    id: 6,
    title: "AI Integration",
    services:["Chatbot Development" , "Practice Analytics" , "Natural Language Processing" , "Ai Driven Automation"],
    desc: "Learn HTML, CSS, and JavaScript to build dynamic and responsive websites,  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cum saepe, aliquid ullam quis odio quisquam quidem quo illo odit?",
    benefits: [
      "Lorem Ipsum color",
      "Lorem color I",
      "dummy text",
      "Benefit Comes",
      "On time deleviry",
    ],
    img: "/img/aiintigration.png",
  },
];

const SignleService = () => {
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
  const { sType } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const foundService = servicesData.filter(
      (sService) => sService.id == sType
    );

    if (foundService.length == 0) {
      setService(null);
    } else {
      setService(foundService[0]);
    }
  }, []);

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
        {service && (
          <div className="services-banner-title">
            <h1>
              Let's a have a look at Our{" "}
              <span className="sp-span-t">Services</span>
            </h1>
            <span className="banner-subtitle-services">
              Solutions Designed For Your Digital Evolution
            </span>
          </div>
        )}
      </header>
      <main className="single-service-main container">
        {!service ? (
          <h2 className="single-service-error-title">
            No Services found with the given Id
          </h2>
        ) : (
          <>
            <div className="single-service-main-div ">
              <div className="single-service-title">
                <h2>{service.title}</h2>
              </div>
              <p className="single-service-description">{service.desc}</p>
              <p className="single-service-description">
                {service.desc} Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Officia, nostrum?
              </p>
              <div className="servicesframe">
              {service.services.map((e,i) => (
                <div className={`servicenameframe servicecolor${i} ` } >{e}</div>
                ))}  
              </div>             

            
              <div className="serviceoffers">
              </div>
              <div className="single-service-card-container">
                <div className="single-service-card-img">
                  <img src={service.img} />
                  
                </div>
                <div className="single-service-card-benefits">
                  <div>
                    {service.benefits.map((e, i) => (
                      <div className="card-benefit" key={i}>
                        <i className="fa-solid fa-check"></i>
                        {e}
                      </div>
                      
                    ))}
                    <div className="bookconsult">
                    <button ><img  src="/img/call.svg" alt="" /> Book a Colsuntant</button>
                    </div>

                  </div>
                </div>
              </div>
              <section id="benefits-section">
                <h2 className="benefits-main-title">Benefits</h2>
                <ul>
                  <li>
                    <strong>Lorem, ipsum.</strong>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Maiores veritatis numquam, et
                    iure doloribus error dignissimos eaque quaerat repellat
                    incidunt! Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Numquam perferendis itaque adipisci nisi
                    et facilis rem provident vitae, qui dolore.
                  </li>
                  <li>
                    <strong>Lorem, ipsum.</strong>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Maiores veritatis numquam, et
                    iure doloribus error dignissimos eaque quaerat repellat
                    incidunt! Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Numquam perferendis itaque adipisci nisi
                    et facilis rem provident vitae, qui dolore.
                  </li>
                  <li>
                    <strong>Lorem, ipsum.</strong>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Maiores veritatis numquam, et
                    iure doloribus error dignissimos eaque quaerat repellat
                    incidunt! Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Numquam perferendis itaque adipisci nisi
                    et facilis rem provident vitae, qui dolore.
                  </li>
                  <li>
                    <strong>Lorem, ipsum.</strong>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Maiores veritatis numquam, et
                    iure doloribus error dignissimos eaque quaerat repellat
                    incidunt! Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Numquam perferendis itaque adipisci nisi
                    facilis rem provident , qui dolore.
                  </li>
                  <li>
                    <strong>Lorem, ipsum.</strong>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Maiores veritatis numquam, et
                    iure doloribus error dignissimos eaque quaerat repellat
                    incidunt! Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Numquam perferendis itaque adipisci nisi
                    et facilis rem vitae, qui .
                  </li>
                  <li>
                    <strong>Lorem, ipsum.</strong>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Maiores veritatis numquam, et
                    iure doloribus error dignissimos eaque quaerat repellat
                    incidunt! Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Numquam perferendis itaque adipisci nisi
                    et facilis provident vitae, qui dolore.
                  </li>
                  <li>
                    <strong>Lorem, ipsum.</strong>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Maiores veritatis numquam, et
                    iure doloribus error dignissimos eaque quaerat repellat
                    incidunt! Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Numquam perferendis itaque adipisci nisi
                    et facilis rem provident , qui dolore.
                  </li>

                </ul>
              </section>
            </div>
          </>
        )}
      </main>
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

export default SignleService;
