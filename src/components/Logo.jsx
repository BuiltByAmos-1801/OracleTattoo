import React from "react";
import { Link } from "react-router-dom";
import logoSrc from "../images/Oracle_Tattoo_Logo.PNG";

export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`inline-block shrink-0 ${className}`} aria-label="Oracle Tattoo home">
      <img src={logoSrc} alt="Oracle Tattoo" className="w-[80px] h-auto object-contain object-left" width={150} height={38} />
    </Link>
  );
}
