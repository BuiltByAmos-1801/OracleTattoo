import React from "react";
import { Link } from "react-router-dom";
import logoSrc from "../images/Oracle_Tattoo_Logo.PNG";

export default function Logo({ className = "", invert = false }) {
  return (
    <Link to="/" className={`flex h-full shrink-0 items-center ${className}`} aria-label="Oracle Tattoo home">
      <img src={logoSrc} alt="Oracle Tattoo" className={`h-[3.25rem] w-auto object-contain object-center sm:h-[3.75rem] ${invert ? "invert" : ""}`} width={150} height={38} />
    </Link>
  );
}
