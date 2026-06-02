import React from "react";
import { Link } from "react-router-dom";
import logoSrc from "../images/Oracle_Tattoo_Logo.PNG";

export default function Logo({ className = "", invert = false }) {
  return (
    <Link to="/" className={`inline-block shrink-0 ${className}`} aria-label="Oracle Tattoo home">
      <img src={logoSrc} alt="Oracle Tattoo" className={`w-[116px] h-auto object-contain object-left sm:w-[150px] ${invert ? "invert" : ""}`} width={150} height={38} />
    </Link>
  );
}
