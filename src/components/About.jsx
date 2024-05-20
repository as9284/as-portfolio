import { MdDarkMode, MdEmail, MdLightMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function About({ aboutRef, darkMode, toggleDarkMode }) {
  function openLink(url) {
    window.open(url, "_blank");
  }

  function mailToEmail(email) {
    window.location.href = `mailto:${email}`;
  }
  return (
    <>
      <div
        ref={aboutRef}
        className={`w-full min-h-[14rem] flex flex-col justify-center items-center text-center px-4 sm:px-20 py-8 gap-2 dark:bg-neutral-900 duration-300`}
      >
        <div className="max-w-[900px] bg-black text-white flex flex-col justify-center items-center gap-2 shadow-xl place-items-center rounded-md hover:scale-[1.02] duration-300">
          <div className="w-full flex flex-col justify-center items-center gap-2 my-12">
            <h1 className="text-2xl font-bold uppercase drop-shadow-md">
              About
            </h1>
            <p className="text-lg md:text-xl font-normal drop-shadow-md px-4">
              I am a fresh graduate front end web developer that loves making
              beautiful and modern websites, while always aspiring to learn and
              advance my knowledge whenever possible.
            </p>
            <div className="w-full flex flex-row justify-center items-center text-center gap-6 py-4">
              <MdEmail
                onClick={() => mailToEmail("anthonysaliba93@gmail.com")}
                size={35}
                className="cursor-pointer hover:scale-110 duration-300"
              />
              <FaGithub
                onClick={() => openLink("https://github.com/AnthonySaliba787")}
                size={35}
                className="cursor-pointer hover:scale-110 duration-300"
              />
              {!darkMode ? (
                <MdDarkMode
                  onClick={toggleDarkMode}
                  size={35}
                  className="cursor-pointer hover:scale-110 duration-300"
                />
              ) : (
                <MdLightMode
                  onClick={toggleDarkMode}
                  size={35}
                  className="cursor-pointer hover:scale-110 duration-300"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
