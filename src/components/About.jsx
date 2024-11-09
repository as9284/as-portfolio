import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  function openLink(url) {
    window.open(url, "_blank");
  }

  function mailToEmail(email) {
    window.location.href = `mailto:${email}`;
  }
  return (
    <>
      <div
        className={`w-full flex flex-col justify-center items-center text-center gap-2 dark:bg-neutral-900 duration-300`}
      >
        <div className="w-full bg-black text-white flex flex-col justify-center items-center gap-2 place-items-center duration-300">
          <div className="w-3/4 flex flex-col justify-center items-center gap-2 my-12">
            <h1 className="text-2xl font-bold uppercase">About</h1>
            <p className="text-base md:text-lg font-normal px-4">
              As a recent graduate and passionate frontend web developer, I am
              dedicated to creating visually appealing and user-friendly
              websites. I thrive on embracing new challenges and continuously
              expanding my skills to stay ahead in the ever-evolving world of
              web development. Feel free to connect with me below:
            </p>
            <div className="w-full flex flex-row justify-center items-center text-center gap-6 py-4">
              <MdEmail
                onClick={() => mailToEmail("anthonys68892@gmail.com")}
                size={35}
                className="cursor-pointer hover:scale-110 duration-300"
              />
              <FaLinkedin
                onClick={() =>
                  openLink(
                    "https://www.linkedin.com/in/anthony-saliba-5205311b5"
                  )
                }
                size={35}
                className="cursor-pointer hover:scale-110 duration-300"
              />
              <FaGithub
                onClick={() => openLink("https://github.com/as9284")}
                size={35}
                className="cursor-pointer hover:scale-110 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
