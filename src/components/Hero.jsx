import { PiIdentificationBadgeFill } from "react-icons/pi";
import Background from "../assets/bg.png";

function Hero() {
  const bgImage = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  };
  return (
    <>
      <div>
        <div
          className={`w-full min-h-screen bg-neutral-700 flex flex-col justify-center items-center text-center py-4 gap-1 md:gap-4 lg:gap-6`}
        >
          <div className="max-w-[1240px] h-96 flex flex-col justify-center items-center px-12 mx-4 bg-blue-400 rounded-md border-2 border-blue-300 shadow-xl hover:scale-[1.02] hover:shadow-2xl duration-300">
            <div className="w-full flex flex-col justify-center items-center gap-2 my-12">
              <PiIdentificationBadgeFill
                size={75}
                className="text-white drop-shadow-md"
              />
              <h1 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold uppercase drop-shadow-md">
                Anthony Saliba
              </h1>
              <p className="text-lg md:text-2xl text-white font-medium uppercase drop-shadow-md">
                portfolio
              </p>
            </div>

            <button className="text-sm md:text-lg px-12 py-4 my-2 bg-neutral-900 rounded-md font-medium text-white shadow-sm hover:bg-neutral-700 hover:shadow-lg active:scale-95 duration-300 uppercase">
              Discover
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
