import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";
import React from 'react';


// PlusSvg component without JSX
const PlusSvg = ({ className = "" }) => {
  return React.createElement(
    "svg",
    { className: className || "", width: "11", height: "11", fill: "none" },
    React.createElement("path", {
      d: "M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 1 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 1 1-1-1V1z",
      fill: "#ada8c4",
    })
  );
};

// Gradient component without JSX
export const Gradient = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("div", {
      className: "relative z-0 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] sm:h-8 sm:mx-4 lg:h-6 lg:mx-8",
    }),
    React.createElement("div", {
      className: "relative z-0 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] sm:h-8 sm:mx-8 lg:h-6 lg:mx-20",
    })
  );
};

// BottomLine component without JSX
export const BottomLine = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("div", {
      className: "hidden sm:block absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none z-0 xl:block",
    }),
    React.createElement(PlusSvg, { className: "hidden sm:block absolute top-[54.9375rem] left-[2.1875rem] z-0 pointer-events-none xl:block" }),
    React.createElement(PlusSvg, { className: "hidden sm:block absolute top-[54.9375rem] right-[2.1875rem] z-0 pointer-events-none xl:block" })
  );
};

// Rings component without JSX
const Rings = () => {
  return React.createElement("div", {
    className: "absolute top-1/2 left-1/2 w-[15rem] sm:w-[30rem] md:w-[45rem] xl:w-[60rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0",
  });
};

// BackgroundCircles component without JSX
export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return React.createElement(
    "div",
    {
      className:
        "absolute -top-[32rem] left-1/2 w-[15rem] sm:w-[30rem] md:w-[45rem] xl:w-[60rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem] z-0",
    },
    React.createElement(Rings, null),
    React.createElement("div", { className: "py-20" }),
    React.createElement("div", { className: "py-20" }),
    React.createElement("div", { className: "py-20" }),
    React.createElement(
      MouseParallax,
      { strength: 0.07, parallaxContainerRef: parallaxRef },
      React.createElement(
        "div",
        { className: "absolute bottom-1/2 left-1/2 w-[1px] h-1/2 origin-bottom rotate-[46deg]" },
        React.createElement("div", {
          className: `w-1.5 h-1.5 sm:w-2 sm:h-2 -ml-1 -mt-28 bg-gradient-to-b from-[#ffffff] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`,
        })
      ),
      React.createElement(
        "div",
        { className: "absolute bottom-1/2 left-1/2 w-[1px] h-1/2 origin-bottom -rotate-[56deg]" },
        React.createElement("div", {
          className: `w-3 h-3 sm:w-4 sm:h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`,
        })
      ),
      React.createElement(
        "div",
        { className: "absolute bottom-1/2 left-1/2 w-[1px] h-1/2 origin-bottom rotate-[54deg]" },
        React.createElement("div", {
          className: `hidden sm:block w-3 h-3 sm:w-4 sm:h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`,
        })
      ),
      React.createElement(
        "div",
        { className: "absolute bottom-1/2 left-1/2 w-[1px] h-1/2 origin-bottom -rotate-[65deg]" },
        React.createElement("div", {
          className: `w-3 h-3 sm:w-4 sm:h-4 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`,
        })
      ),
      React.createElement(
        "div",
        { className: "absolute bottom-1/2 left-1/2 w-[1px] h-1/2 origin-bottom -rotate-[85deg]" },
        React.createElement("div", {
          className: `w-4 h-4 sm:w-6 sm:h-6 -ml-2 sm:-ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`,
        })
      ),
      React.createElement(
        "div",
        { className: "absolute bottom-1/2 left-1/2 w-[1px] h-1/2 origin-bottom rotate-[70deg]" },
        React.createElement("div", {
          className: `w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 -ml-1.5 sm:-ml-2 md:-ml-3 -mt-2 sm:-mt-2.5 md:-mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`,
        })
      )
    )
  );
};