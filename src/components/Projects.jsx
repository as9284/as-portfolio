import Card from "./Card";
import CardData from "../data/cardsData.json";

import AstraProperties from "../assets/astrap.png";
import LunaCloud from "../assets/lunac.png";
import QuickNews from "../assets/quickn.png";

const images = {
  "astrap.png": AstraProperties,
  "lunac.png": LunaCloud,
  "quickn.png": QuickNews,
};

const importAll = (imagePaths) => {
  let importedImages = {};
  for (let path in imagePaths) {
    importedImages[path] = imagePaths[path];
  }
  return importedImages;
};

const importedImages = importAll(images);

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
          {CardData.map((item) => (
            <Card
              key={item.id}
              image={importedImages[item.src]}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
