import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.svg";
import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import X from "./images/x.svg";
import SubmitArrow from "./images/arrow.svg";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [emailValue, setEmailValue] = useState("");
  const [email, setEmail] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailValue) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(emailValue)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setEmail(true);
  };

  return (
    <div className="section-container bg-black flex flex-col text-white text-left my-8 md:relative md:flex-row md:justify-between md:py-10">
      <div className="md:flex-auto">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            onClick={scrollToTop}
            className="my-3 pt-5 md:w-8 md:h-8 md:pt-0"
          ></img>
        </Link>
      </div>

      <div className="my-3 md:flex-auto">
        <ul>
          <li className="mb-2">10 Stone St, Perth WA</li>
          <li className="mb-2">12-345-678</li>
          <a href="mailto:cafestone@gmail.com">
            <li className="mb-2">cafestone@gmail.com</li>
          </a>
        </ul>
        <div className="flex gap-5 mt-5">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={Facebook} alt="Facebook" className="md:w-6 md:h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" className="md:w-6 md:h-6" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noreferrer">
            <img src={X} alt="X" className="md:w-6 md:h-6" />
          </a>
        </div>
      </div>

      <div className="my-3 md:flex-auto md:text-right">
        <p className="mb-2 md:text-left">Subscribe</p>
        {email ? (
          <p className="mt-3 md:text-left">Thank you for subscribing!</p>
        ) : (
          <form className="relative md:w-1/2" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Please enter your email..."
              className="w-full bg-white text-gray-800 rounded-sm pl-2 md:text-sm md:p-1"
              required
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <button type="submit">
              <img
                src={SubmitArrow}
                alt="right arrow"
                className="absolute right-1 bottom-1.5 md:bottom-2"
              />
            </button>
          </form>
        )}
        {error && (
          <p className="text-red-500 font-light mt-2 md:text-left">{error}</p>
        )}
      </div>

      <p className="text-right text-white my-3 text-sm md:absolute md:bottom-0 md:right-10">
        stonestreet@2025
      </p>
    </div>
  );
}
