import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRobot, FaUserFriends, FaRegSmileBeam } from 'react-icons/fa';
import { BackgroundCircles, BottomLine} from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import Notification from "./design/Notification";
import Terminal from './design/Terminal';
import Features from './design/Benefits';
import Collaboration from './design/Collaboration';
import { useMediaQuery } from 'react-responsive';
import './design.css';
import Roadmap from "./Roadmap";
import Footer from './Footer';
import Section from './design/Section';

function LandingPage({ isAuth, setAuth }) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const navigate = useNavigate();
  const parallaxRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
    navigate('/login');
  };

  return (
    <div className="relative bg-gray-900 text-gray-100 w-full min-h-screen z-10">
      {/* Keep the BackgroundCircles visible, but reduce size for small screens */}
      <BackgroundCircles
        parallaxRef={parallaxRef}
        className={`absolute inset-0 items-center justify-center z-0 ${isSmallScreen ? 'scale-75' : ''}`}
      />

      <BottomLine />  
<Section>
      <div className="container relative pt-16 sm:pt-24 md:pt-32 px-4" ref={parallaxRef}>
        {/* Main content wrapped in a higher z-index container */}
        <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-10 sm:mb-16 md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="inline-block relative">
              SmartChat AI{" "}
              <img
                src={"path-to-your-curve-asset"} 
                className={`absolute top-full left-0 w-full ${isSmallScreen ? 'w-[110%]' : 'sm:w-[120%] md:w-[150%] lg:w-full'}`}
                alt=""
              />
            </span>
          </h1>

          <p className="body-1 text-base sm:text-lg lg:text-xl max-w-full sm:max-w-3xl mx-auto text-gray-300 mb-4 sm:mb-6 lg:mb-8">
            Seamless AI-powered conversations in real-time. Your personal AI assistant is here to help, 24/7.
          </p>

          {/* Buttons adjust based on screen size */}
          {!isAuth ? (
  <div className={`space-y-3 sm:space-y-0 sm:space-x-4 flex ${isSmallScreen ? 'flex-col' : 'sm:flex-row'} justify-center`}>
    <Link
      to="/register"
      className="block sm:inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300"
    >
      Register
    </Link>
    <Link
      to="/login"
      className="block sm:inline-block w-full sm:w-auto bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300"
    >
      Login
    </Link>
  </div>
) : (
  <button
    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300"
    onClick={handleLogout}
  >
    Logout
  </button>
)}

        </div>

        {/* Hero Image and Parallax Effects */}
        <div className={`relative max-w-[18rem] sm:max-w-[23rem] md:max-w-5xl mx-auto ${isSmallScreen ? 'mb-8' : 'xl:mb-24'}`}>
          {/* Terminal Component - visible on all screens, scales down for small screens */}
          <div className={`w-full h-[350px] ${isSmallScreen ? 'block' : 'lg:h-[500px]'}`}>
            <Terminal /> {/* Use the Terminal component */}
          </div>

          {/* Parallax components - hide on smaller screens */}
          {!isSmallScreen && (
            <>
              <ScrollParallax isAbsolutelyPositioned>
                <Notification
                  className="hidden absolute -right-[3.5rem] md:-right-[5.5rem] bottom-[10rem] md:bottom-[15rem] w-[14rem] md:w-[18rem] xl:flex"
                  title="Code generation"
                />
              </ScrollParallax>

              <ScrollParallax isAbsolutelyPositioned>
                <ul className="hidden xl:flex absolute -left-[3.5rem] md:-left-[5.5rem] bottom-[5rem] md:bottom-[7.5rem] px-1 py-1 bg-gray-700/60 backdrop-blur-md border border-gray-600 rounded-2xl z-0"> 
                  <li className="p-4 md:p-5">
                    <FaRobot className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                  </li>
                  <li className="p-4 md:p-5">
                    <FaUserFriends className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                  </li>
                  <li className="p-4 md:p-5">
                    <FaRegSmileBeam className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                  </li>
                </ul>
              </ScrollParallax>
            </>
          )}
        </div>
      </div>
      </Section>

      {/* Features and Collaboration sections remain unchanged but ensure they are responsive */}
      <Features />
      <Collaboration />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default LandingPage;
