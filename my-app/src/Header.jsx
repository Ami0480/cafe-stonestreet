import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "./images/logo.svg";
import Hamburger from "./images/hamburger.svg";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <>
      <div className="section-container absolute z-50 flex items-center justify-between w-full p-4">
        <Link to="/" onClick={scrollToTop} className="md:pt-10">
          <img src={Logo} alt="Logo" className="md:w-8 md:h-8" />
        </Link>
        <button onClick={toggleNav} className="cursor-pointer z-50 relative">
          <img src={Hamburger} alt="Nav Icon" className="w-8 h-8 md:hidden" />
        </button>
        <div className="hidden md:flex md:text-white md:text-2xl md:font-aboreto md:gap-8 md:pt-10">
          <a href="#history">History</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      {navOpen && <div className="fixed inset-0" onClick={closeNav} />}
      <div
        className={`fixed top-0 right-0 w-1/2 bg-black text-white z-50 transform transition-transform duration-500 ease-in-out ${
          navOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar onClose={closeNav} />
      </div>
    </>
  );
}
