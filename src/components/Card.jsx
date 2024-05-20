import { useState } from "react";
import Tags from "./Tags";

function Card({ image, title, description, link, tags }) {
  const [expandImage, setExpandImage] = useState(false);

  function openLink(url) {
    window.open(url, "_blank");
  }

  return (
    <>
      <div className="max-w-[1240px] h-[36rem] flex flex-col justify-between items-center gap-2 shadow-xl place-items-center rounded-md hover:scale-[1.02] duration-300 dark:bg-black">
        {/* <a href={image} target="_blank" rel="noopener noreferrer"></a> */}
        <img
          src={image}
          alt={title}
          className="w-[40rem] h-auto overflow-hidden rounded-t-md hover:brightness-75 cursor-zoom-in duration-300"
          onClick={() => setExpandImage(true)}
        />
        <Tags tags={tags} />
        <div className="w-full flex flex-col justify-center items-center gap-2 my-12">
          <h1 className="text-2xl text-black font-bold uppercase drop-shadow-md dark:text-neutral-200">
            {title}
          </h1>
          <p className="text-base text-black font-normal drop-shadow-md px-4 dark:text-neutral-200">
            {description}
          </p>
        </div>
        <div className="w-full flex flex-row justify-center items-center px-12 my-4 gap-4">
          <button
            onClick={() => openLink(link)}
            className="w-full text-base md:text-lg py-4 my-2 rounded-md bg-neutral-900 font-medium text-white shadow-lg hover:bg-neutral-700 hover:shadow-xl focus:bg-neutral-700 focus:shadow-lg active:scale-95 duration-300 uppercase dark:text-neutral-200"
          >
            Details
          </button>
        </div>
      </div>
      {expandImage && (
        <div className="w-screen h-screen flex flex-col justify-center items-center top-0 left-0 fixed z-10 bg-black/80 backdrop-blur-lg px-8">
          <img
            src={image}
            alt={title}
            className="w-full max-w-md md:max-w-xl lg:max-w-5xl overflow-hidden rounded-md shadow-xl"
          />
          <div className="w-full flex flex-row justify-center items-center gap-4 py-4">
            <button
              onClick={() => openLink(image)}
              className="w-32 py-3 bg-neutral-200 rounded-md shadow-md font-medium text-neutral-800 hover:bg-neutral-900 hover:text-neutral-100 duration-200"
            >
              Expand
            </button>
            <button
              onClick={() => setExpandImage(false)}
              className="w-32 py-3 bg-neutral-200 rounded-md shadow-md font-medium text-neutral-800 hover:bg-neutral-900 hover:text-neutral-100 duration-200"
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
