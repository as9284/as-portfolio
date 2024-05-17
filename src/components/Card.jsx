import { useState } from "react";

function Card({ image, title, description, link }) {
  const [expandImage, setExpandImage] = useState(false);

  function openLink(url) {
    window.open(url, "_blank");
  }

  return (
    <>
      <div className="max-w-[1240px] h-[36rem] flex flex-col justify-between items-center gap-2 shadow-xl place-items-center rounded-md hover:scale-[1.02] duration-300">
        <img
          src={image}
          alt={title}
          className="w-[40rem] h-auto overflow-hidden rounded-t-md cursor-pointer"
          onClick={() => setExpandImage(true)}
        />
        <div className="w-full flex flex-col justify-center items-center gap-2 my-12">
          <h1 className="text-2xl text-black font-bold uppercase drop-shadow-md">
            {title}
          </h1>
          <p className="text-base text-black font-normal drop-shadow-md px-4">
            {description}
          </p>
        </div>
        <div className="w-full flex flex-row justify-center items-center px-12 my-4 gap-4">
          <button
            onClick={() => openLink(link)}
            className="w-full text-base md:text-lg py-4 my-2 rounded-md bg-neutral-900 font-medium text-white shadow-lg hover:bg-neutral-700 hover:shadow-xl focus:bg-neutral-700 focus:shadow-lg active:scale-95 duration-300 uppercase"
          >
            Details
          </button>
        </div>
      </div>
      {expandImage && (
        <div
          className="w-screen h-screen flex justify-center items-center top-0 left-0 fixed z-10 bg-black/80 backdrop-blur-lg cursor-pointer"
          onClick={() => setExpandImage(false)}
        >
          <img
            src={image}
            alt={title}
            className="w-3/4 overflow-hidden rounded-md shadow-xl"
          />
        </div>
      )}
    </>
  );
}

export default Card;
