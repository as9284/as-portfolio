function Card({ image, title, description, link }) {
  function openLink(url) {
    window.open(url, "_blank");
  }

  function mailToEmail(email) {
    window.location.href = `mailto:${email}`;
  }

  return (
    <>
      <div className="max-w-[1240px] h-[36rem] flex flex-col justify-between items-center gap-2 shadow-xl place-items-center rounded-md hover:scale-[1.02] duration-300">
        <img
          src={image}
          alt={title}
          className="w-[40rem] h-auto overflow-hidden rounded-t-md"
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
    </>
  );
}

export default Card;
