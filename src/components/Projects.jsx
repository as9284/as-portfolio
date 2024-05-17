import Card from "./Card";

import AstraProperties from "../assets/astrap.png";
import LunaCloud from "../assets/lunac.png";
import QuickNews from "../assets/quickn.png";

function Projects({ targetRef }) {
  return (
    <>
      <div
        ref={targetRef}
        className={`w-full min-h-[50rem] flex flex-col justify-center items-center text-center px-4 sm:px-20 py-4 gap-8`}
      >
        <h1 className="text-3xl text-black md:text-4xl lg:text-5xl font-bold uppercase drop-shadow-md">
          Projects
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            image={AstraProperties}
            title={"Astra Properties"}
            description={
              "Modern real estate website built with React & CSS, with a primary focus on good responsive practices while using no media queries."
            }
            link={"https://github.com/AnthonySaliba787/astra-properties"}
          />
          <Card
            image={LunaCloud}
            title={"Luna Cloud"}
            description={
              "Minimalistic cloud storage website built with React & Tailwind CSS, with a heavy focus on ease-of-use and beautiful design."
            }
            link={"https://github.com/AnthonySaliba787/luna-cloud"}
          />
          <Card
            image={QuickNews}
            title={"Quick News"}
            description={
              "Modern news website built with React & Tailwind that leverages NewsAPI for providing users with a quick and easy way to get updated news."
            }
            link={"https://github.com/AnthonySaliba787/quick-news"}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
