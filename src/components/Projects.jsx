import Card from "./Card";
import CardData from "../data/cardsData.json";

import AstraProperties from "../assets/astrap.webp";
import LunaCloud from "../assets/lunac.webp";
import QuickNews from "../assets/quickn.webp";
import HoloNotes from "../assets/holonotes.webp";
import QuickPass from "../assets/quickpass.webp";
import QuickShorten from "../assets/quickshorten.webp";
import AstraFeedback from "../assets/astrafeedback.webp";
import AstraWeather from "../assets/astraweather.webp";

const images = {
  "astrap.webp": AstraProperties,
  "lunac.webp": LunaCloud,
  "quickn.webp": QuickNews,
  "holonotes.webp": HoloNotes,
  "quickpass.webp": QuickPass,
  "quickshorten.webp": QuickShorten,
  "astrafeedback.webp": AstraFeedback,
  "astraweather.webp": AstraWeather,
};

const importAll = (imagePaths) => {
  let importedImages = {};
  for (let path in imagePaths) {
    importedImages[path] = imagePaths[path];
  }
  return importedImages;
};

const importedImages = importAll(images);

function Projects({ projectsRef }) {
  return (
    <>
      <div
        ref={projectsRef}
        className={`w-full min-h-[50rem] flex flex-col justify-center items-center text-center px-4 sm:px-20 py-8 gap-12 dark:bg-neutral-900 duration-300`}
      >
        <h1 className="text-3xl text-black md:text-4xl lg:text-5xl font-bold uppercase drop-shadow-md dark:text-neutral-200">
          Projects
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CardData.map((item) => (
            <Card
              key={item.id}
              image={importedImages[item.src]}
              title={item.title}
              description={item.description}
              link={item.link}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
