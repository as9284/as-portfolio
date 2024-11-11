import { useState } from "react";

function Card({ image, title, description, link, preview }) {
  const [expandImage, setExpandImage] = useState(false);

  function openLink(url) {
    window.open(url, "_blank");
  }

  return (
    <>
      <div className="max-w-[1240px] h-[36rem] flex flex-col justify-between items-center gap-2 shadow-md place-items-center rounded-md hover:scale-[1.02] duration-300 dark:bg-black">
        <img
          src={image}
          alt={title}
          className="w-full h-[15rem] object-contain rounded-t-md hover:brightness-75 cursor-zoom-in duration-150"
          onClick={() => setExpandImage(true)}
        />
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl text-black font-bold uppercase dark:text-neutral-200">
            {title}
          </h1>
          <p className="text-base text-black font-normal px-4 dark:text-neutral-200">
            {description}
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center px-12 my-4 gap-1">
          <p
            onClick={() => openLink(link)}
            className="text-neutral-600 font-semibold cursor-pointer dark:text-neutral-200 select-none"
          >
            GitHub Details
          </p>
          <button
            onClick={() => openLink(preview)}
            className="w-full text-base md:text-lg py-4 my-2 rounded-md bg-neutral-900 font-medium text-white hover:bg-neutral-700 focus:bg-neutral-700 active:scale-95 duration-300 select-none uppercase dark:text-neutral-200"
          >
            Preview
          </button>
        </div>
      </div>
      {expandImage && (
        <div className="w-screen h-screen flex flex-col justify-center items-center top-0 left-0 fixed z-10 bg-black/90 px-8">
          <img
            src={image}
            alt={title}
            className="w-full max-w-md md:max-w-xl lg:max-w-5xl overflow-hidden rounded-md shadow-xl"
          />
          <div className="w-full flex flex-row justify-center items-center gap-4 py-4">
            <button
              onClick={() => openLink(image)}
              className="w-32 py-3 bg-neutral-200 rounded-md shadow-md font-medium text-neutral-800 hover:bg-neutral-400 duration-200"
            >
              Expand
            </button>
            <button
              onClick={() => setExpandImage(false)}
              className="w-32 py-3 bg-neutral-200 rounded-md shadow-md font-medium text-neutral-800 hover:bg-neutral-400 duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
