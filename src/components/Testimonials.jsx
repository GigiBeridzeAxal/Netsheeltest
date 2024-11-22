import React, { useState } from "react";

const Testimonials = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count == 4) setCount(1);
    else {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count == 1) setCount(4);
    else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <section id="testimonials">
      <div className="testimonials-title">
        <h1>What Our Clients Say</h1>
        <p>
          Netseel is a dynamic force in the digital realm, boasting a talented
          team of over 20 professionals <br />
          who have completed more than 240 projects
        </p>
      </div>

      <div className="testimonials-section-logo">
        <img src="/img/test-i.png" alt="testimonial logo" />
        <h2 className="sp-h2-test">Testimonials</h2>
      </div>
      <div className="testimonials-container container">
        <div
          className={`testimonials-main-div ${count == 1 ? "active-test" : ""}`}
        >
          <div className="testimonials-pic">
            <img src="/img/test1.png" alt="" />
          </div>
          <div className="test-desc">
            <p>
              Netseel is a dynamic force in the digital realm, boasting a
              talented team of over 20 professionals who have completed more
              than 240 projects
            </p>
          </div>
          <div className="test-about">
            <div className="test-about-name">Waqar Younus</div>
            <div className="test-about-profession">CEO Ideometrix</div>
          </div>
          <img className="img-sp" src="/img/test-bg.png" alt="" />
        </div>
        <div
          className={`testimonials-main-div ${count == 2 ? "active-test" : ""}`}
        >
          <div className="testimonials-pic">
            <img src="/img/test2.png" alt="" />
          </div>
          <div className="test-desc">
            <p>
              I really Like this site Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Debitis adipisci, dolorem quod nostrum, non
              fugiat, suscipit sapiente eos tem, voluptas. Illum?
            </p>
          </div>
          <div className="test-about">
            <div className="test-about-name">Noman Younus</div>
            <div className="test-about-profession">CEO something</div>
          </div>
          <img className="img-sp" src="/img/test-bg.png" alt="" />
        </div>
        <div
          className={`testimonials-main-div ${count == 3 ? "active-test" : ""}`}
        >
          <div className="testimonials-pic">
            <img src="/img/test3.png" alt="" />
          </div>
          <div className="test-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam eveniet tempore nisi rem, consectetur vero eum iure
              doloremque officia reiciendis facilis maxime cupiditate excepturi
              aliquid.
            </p>
          </div>
          <div className="test-about">
            <div className="test-about-name">Noman Younus</div>
            <div className="test-about-profession">CEO something</div>
          </div>
          <img className="img-sp" src="/img/test-bg.png" alt="" />
        </div>
        <div
          className={`testimonials-main-div ${count == 4 ? "active-test" : ""}`}
        >
          <div className="testimonials-pic">
            <img src="/img/test4.png" alt="" />
          </div>
          <div className="test-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,
              fugiat? Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="test-about">
            <div className="test-about-name">HI Younus</div>
            <div className="test-about-profession">CEO anything</div>
          </div>
          <img className="img-sp" src="/img/test-bg.png" alt="" />
        </div>
        <button className="test-l-btn" onClick={handleDecrement}>
          <img src="/img/test-l.png" alt="" />
        </button>
        <button className="test-r-btn" onClick={handleIncrement}>
          <img src="/img/test-r.png" alt="" />
        </button>

        <div className="navigation-test-div">
          <button
            onClick={() => setCount(1)}
            className={`navigation-test-btn ${
              count == 1 ? "test-active-btn" : ""
            }`}
          ></button>
          <button
            onClick={() => setCount(2)}
            className={`navigation-test-btn ${
              count == 2 ? "test-active-btn" : ""
            }`}
          ></button>
          <button
            onClick={() => setCount(3)}
            className={`navigation-test-btn ${
              count == 3 ? "test-active-btn" : ""
            }`}
          ></button>
          <button
            onClick={() => setCount(4)}
            className={`navigation-test-btn ${
              count == 4 ? "test-active-btn" : ""
            }`}
          ></button>
        </div>
        <div className="testimonials-rdm-img">
          <div className="div-test-1">
            <img src="/img/test1.png" alt="" />
            <img src="/img/test2.png" alt="" />
          </div>
          <div className="div-test-2">
            <img src="/img/test4.png" alt="" />
            <img src="/img/test7.png" alt="" />
          </div>
          <div className="div-test-3">
            <img src="/img/test3.png" alt="" />
            <img src="/img/test5.png" alt="" />
          </div>
          <div className="div-test-4">
            <img src="/img/test6.png" alt="" />
            <img src="/img/test2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
