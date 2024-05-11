import { PiIdentificationBadgeFill } from "react-icons/pi";
import Background from "../assets/bg.png";
import AstraProperties from "../assets/astrap.png";
import LunaCloud from "../assets/lunac.png";
import QuickNews from "../assets/quickn.png";
import { useRef } from "react";

function Hero() {
  const targetRef = useRef(null);
  const scrollToElement = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bgImage = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  };

  function openLink(url) {
    window.open(url, "_blank");
  }

  return (
    <>
      <div>
        {/* Hero Section */}
        <div
          style={bgImage}
          className={`w-full min-h-screen flex flex-col justify-center items-center text-center py-4 gap-1 md:gap-4 lg:gap-6`}
        >
          <div className="max-w-[1240px] h-[30rem] flex flex-col justify-evenly items-center px-12 mx-4 bg-white shadow-2xl rounded-md">
            <div className="w-full flex flex-col justify-center items-center gap-2 my-12">
              <PiIdentificationBadgeFill
                size={75}
                className="text-black drop-shadow-md"
              />
              <h1 className="text-4xl text-black md:text-5xl lg:text-6xl font-bold uppercase drop-shadow-md">
                Anthony Saliba
              </h1>
              <p className="text-lg md:text-2xl text-black font-medium uppercase drop-shadow-md">
                portfolio
              </p>
            </div>

            <button
              onClick={scrollToElement}
              className="w-full text-base md:text-lg lg:text-xl py-4 my-2 rounded-md bg-neutral-900 font-medium text-white shadow-lg hover:bg-neutral-700 hover:shadow-xl focus:bg-neutral-700 focus:shadow-lg active:scale-95 duration-300 uppercase"
            >
              Discover
            </button>
          </div>
        </div>
        {/* React Section */}
        <div
          ref={targetRef}
          className={`w-full min-h-[50rem] flex flex-col justify-center items-center text-center px-4 sm:px-20 py-4 gap-8`}
        >
          <h1 className="text-3xl text-black md:text-4xl lg:text-5xl font-bold uppercase drop-shadow-md">
            React Projects
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="max-w-[1240px] h-[36rem] flex flex-col justify-between items-center gap-2 shadow-xl place-items-center rounded-md hover:scale-[1.02] duration-300">
              <img
                src={AstraProperties}
                alt=""
                className="w-[40rem] h-auto overflow-hidden rounded-t-md"
              />
              <div className="w-full flex flex-col justify-center items-center gap-2 my-12">
                <h1 className="text-2xl text-black font-bold uppercase drop-shadow-md">
                  Astra Properties
                </h1>
                <p className="text-base text-black font-normal drop-shadow-md px-4">
                  Modern real estate website built with React & CSS, with a
                  primary focus on good responsive practices while using no
                  media queries.
                </p>
              </div>
              <div className="w-full flex flex-row justify-center items-center px-12 my-4 gap-4">
                <button
                  onClick={() =>
                    openLink(
                      "https://github.com/AnthonySaliba787/astra-properties"
                    )
                  }
                  className="w-full text-base md:text-lg py-4 my-2 rounded-md bg-neutral-900 font-medium text-white shadow-lg hover:bg-neutral-700 hover:shadow-xl focus:bg-neutral-700 focus:shadow-lg active:scale-95 duration-300 uppercase"
                >
                  Details
                </button>
              </div>
            </div>

            <div className="max-w-[1240px] h-[36rem] flex flex-col justify-between items-center gap-2 shadow-xl place-items-center rounded-md hover:scale-[1.02] duration-300">
              <img
                src={LunaCloud}
                alt=""
                className="w-[40rem] h-auto overflow-hidden rounded-t-md"
              />
              <div className="w-full flex flex-col justify-center items-center gap-2 my-12">
                <h1 className="text-2xl text-black font-bold uppercase drop-shadow-md">
                  Luna Cloud
                </h1>
                <p className="text-base text-black font-normal drop-shadow-md px-4">
                  Modern real estate website built with React & CSS, with a
                  primary focus on good responsive practices while using no
                  media queries.
                </p>
              </div>
              <div className="w-full flex flex-row justify-center items-center px-12 my-4 gap-4">
                <button
                  onClick={() =>
                    openLink("https://github.com/AnthonySaliba787/luna-cloud")
                  }
                  className="w-full text-base md:text-lg py-4 my-2 rounded-md bg-neutral-900 font-medium text-white shadow-lg hover:bg-neutral-700 hover:shadow-xl focus:bg-neutral-700 focus:shadow-lg active:scale-95 duration-300 uppercase"
                >
                  Details
                </button>
              </div>
            </div>

            <div className="max-w-[1240px] h-[36rem] flex flex-col justify-between items-center gap-2 shadow-xl place-items-center rounded-md hover:scale-[1.02] duration-300">
              <img
                src={QuickNews}
                alt=""
                className="w-[40rem] h-auto overflow-hidden rounded-t-md"
              />
              <div className="w-full flex flex-col justify-center items-center gap-2 my-12">
                <h1 className="text-2xl text-black font-bold uppercase drop-shadow-md">
                  Quick News
                </h1>
                <p className="text-base text-black font-normal drop-shadow-md px-4">
                  Modern real estate website built with React & CSS, with a
                  primary focus on good responsive practices while using no
                  media queries.
                </p>
              </div>
              <div className="w-full flex flex-row justify-center items-center px-12 my-4 gap-4">
                <button
                  onClick={() =>
                    openLink("https://github.com/AnthonySaliba787/quick-news")
                  }
                  className="w-full text-base md:text-lg py-4 my-2 rounded-md bg-neutral-900 font-medium text-white shadow-lg hover:bg-neutral-700 hover:shadow-xl focus:bg-neutral-700 focus:shadow-lg active:scale-95 duration-300 uppercase"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
