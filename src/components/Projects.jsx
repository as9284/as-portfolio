import Card from "./Card";
import CardData from "../data/cardsData.json";

import QuickShorten from "../assets/quickshorten.webp";
import AstraFeedback from "../assets/astrafeedback.webp";
import HoloMovies from "../assets/holomovies.webp";

const images = {
  "quickshorten.webp": QuickShorten,
  "astrafeedback.webp": AstraFeedback,
  "holomovies.webp": HoloMovies,
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
        <h1 className="text-3xl text-black md:text-4xl lg:text-5xl font-bold uppercase dark:text-neutral-200">
          Featured Projects
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CardData.map((item) => {
            return (
              <Card
                key={item.id}
                image={importedImages[item.src]}
                title={item.title}
                description={item.description}
                link={item.link}
                preview={item.preview}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
