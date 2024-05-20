import { useEffect, useRef, useState } from "react";
import BackgroundLight from "../assets/BackgroundLight.webp";
import BackgroundDark from "../assets/BackgroundDark.webp";
import { PiIdentificationBadgeFill } from "react-icons/pi";

import Projects from "./Projects";
import About from "./About";

function Home() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  const bgImageLight = {
    backgroundImage: `url(${BackgroundLight})`,
    backgroundSize: "cover",
  };

  const bgImageDark = {
    backgroundImage: `url(${BackgroundDark})`,
    backgroundSize: "cover",
  };

  const [backgroundImage, setBackgroundImage] = useState(bgImageLight);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
      setBackgroundImage(bgImageDark);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
      setBackgroundImage(bgImageLight);
    }
  }, []);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setBackgroundImage(bgImageDark);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setBackgroundImage(bgImageLight);
    }
  };

  return (
    <>
      <div>
        {/* Hero Section */}
        <div
          style={backgroundImage}
          className={`w-full min-h-screen flex flex-col justify-center items-center text-center py-4 gap-1 md:gap-4 lg:gap-6`}
        >
          <div className="max-w-[1240px] h-[30rem] flex flex-col justify-evenly items-center px-12 mx-4 bg-white shadow-2xl rounded-md dark:bg-black">
            <div className="w-full flex flex-col justify-center items-center gap-2 my-12">
              <PiIdentificationBadgeFill
                size={75}
                className="text-black drop-shadow-md dark:text-neutral-200"
              />
              <h1 className="text-4xl text-black md:text-5xl lg:text-6xl font-bold uppercase drop-shadow-md dark:text-neutral-200">
                Anthony Saliba
              </h1>
              <p className="text-lg md:text-2xl text-black font-medium uppercase drop-shadow-md dark:text-neutral-200">
                portfolio
              </p>
            </div>

            <div className="w-full flex flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="w-full text-base md:text-lg lg:text-xl py-4 my-2 rounded-md bg-neutral-900 font-medium text-white shadow-lg hover:bg-neutral-700 hover:shadow-xl focus:bg-neutral-700 focus:shadow-lg active:scale-95 duration-300 uppercase"
              >
                Discover
              </button>

              <button
                onClick={scrollToAbout}
                className="w-full text-base md:text-lg lg:text-xl py-4 my-2 rounded-md bg-neutral-900 font-medium text-white shadow-lg hover:bg-neutral-700 hover:shadow-xl focus:bg-neutral-700 focus:shadow-lg active:scale-95 duration-300 uppercase"
              >
                About
              </button>
            </div>
          </div>
        </div>

        <Projects projectsRef={projectsRef} />

        <About
          aboutRef={aboutRef}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </>
  );
}

export default Home;
