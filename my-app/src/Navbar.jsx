import React from "react";
import { Link } from "react-router-dom";
import cross from "./images/cross.png";

export default function Navbar({ onClose }) {
  return (
    <nav className="flex flex-col p-6 pt-14 pb-8">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 text-white"
      >
        <img src={cross} alt="Cross" />
      </button>
      <div className="flex flex-col font-worksans text-xl mt-1 space-y-5 items-end">
        <Link to="/" onClick={onClose}>
          Home
        </Link>
      </div>
    </nav>
  );
}
