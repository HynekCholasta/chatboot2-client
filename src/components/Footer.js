import React from "react";
import Section from "./design/Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-6 max-sm:flex-col max-sm:gap-4">
        
        {/* Copyright Text */}
        <p className="caption text-n-4 text-center sm:text-left">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        
        {/* Navigation Links */}
        <div className="flex gap-6 flex-wrap justify-center sm:justify-start">
          <a href="/home" className="text-n-4 hover:text-n-6 transition duration-200">
            Home
          </a>
          <a href="/Login" className="text-n-4 hover:text-n-6 transition duration-200">
            Login
          </a>
          <a href="/register" className="text-n-4 hover:text-n-6 transition duration-200">
            Register
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
