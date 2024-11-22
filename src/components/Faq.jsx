import React, { useState } from "react";

const Faq = ({ title, desc }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="faq-div">
      <div className="faq-title">
        <h4>{title}</h4>
        <button
          className={`faq-btn ${show ? "show-faq-btn" : ""}`}
          onClick={() => setShow((prevValue) => !prevValue)}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className={`faq-body ${show ? "show-faq-body" : "hidden-faq-body"}`}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Faq;
