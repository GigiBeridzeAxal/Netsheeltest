import React, { useState } from "react";
import "../assets/landing.css";

const Workexm = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count == 6) setCount(1);
    else {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count == 1) setCount(6);
    else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <section id="work-example">
      <h4 className="sec-subtitle">SLIDER</h4>
      <h2 className="sec-title faq-title-section">
        Work
        <span className="sp-span"> Example</span>
      </h2>
      <div className="slider-conainer container">
        <div className="sliders-main-div">
          <div className={`slide-1 ${count == 1 ? "active-slide" : ""}`}>
            <img src="/img/web-des-1.png" alt="" className="slide-image" />
            <h3 className="slide-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              optio?
            </h3>
          </div>
          <div className={`slide-1 ${count == 2 ? "active-slide" : ""}`}>
            <img src="/img/web-des-2.png" alt="" className="slide-image" />
            <h3 className="slide-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              optio?
            </h3>
          </div>
          <div className={`slide-1 ${count == 3 ? "active-slide" : ""}`}>
            <img src="/img/web-des-3.png" alt="" className="slide-image" />
            <h3 className="slide-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              optio?
            </h3>
          </div>
          <div className={`slide-1 ${count == 4 ? "active-slide" : ""}`}>
            <img src="/img/web-dev-2.png" alt="" className="slide-image" />
            <h3 className="slide-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              optio?
            </h3>
          </div>
          <div className={`slide-1 ${count == 5 ? "active-slide" : ""}`}>
            <img src="/img/web-dev-3.png" alt="" className="slide-image" />
            <h3 className="slide-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              optio?
            </h3>
          </div>
          <div className={`slide-1 ${count == 6 ? "active-slide" : ""}`}>
            <img src="/img/web-des-4.png" alt="" className="slide-image" />
            <h3 className="slide-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
              optio?
            </h3>
          </div>
        </div>
        <button
          className="test-l-btn  special-test-l"
          onClick={handleDecrement}
        >
          <img src="/img/test-l.png" alt="" />
        </button>
        <button
          className="test-r-btn  special-test-r"
          onClick={handleIncrement}
        >
          <img src="/img/test-r.png" alt="" />
        </button>
        <div className="navigation-test-div">
          <button
            onClick={() => setCount(1)}
            className={`navigation-test-btn my-special-navigation-btn ${
              count == 1 ? "test-active-btn" : ""
            }`}
          ></button>
          <button
            onClick={() => setCount(2)}
            className={`navigation-test-btn my-special-navigation-btn ${
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
          <button
            onClick={() => setCount(5)}
            className={`navigation-test-btn ${
              count == 5 ? "test-active-btn" : ""
            }`}
          ></button>
          <button
            onClick={() => setCount(6)}
            className={`navigation-test-btn ${
              count == 6 ? "test-active-btn" : ""
            }`}
          ></button>
        </div>
      </div>
    </section>
  );
};

export default Workexm;
