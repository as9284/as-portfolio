function Tags({ tags }) {
  if (typeof tags === "string") {
    tags = tags.split("+");
  }

  const renderTags = tags.map((tag) => {
    let tagColor = "";
    let tagName = "";

    const splitTags = tag.split("+");

    splitTags.forEach((splitTag) => {
      switch (splitTag.trim().toLowerCase()) {
        case "react":
          tagColor = "bg-blue-800";
          tagName = "React";
          break;
        case "tailwind":
          tagColor = "bg-sky-500";
          tagName = "Tailwind";
          break;
        case "vue":
          tagColor = "bg-emerald-500";
          tagName = "Vue";
          break;
        case "css":
          tagColor = "bg-blue-300";
          tagName = "CSS";
          break;
        default:
          break;
      }
    });
    return (
      <p
        key={tag}
        className={`text-xs px-4 py-1 rounded font-bold ${tagColor}`}
      >
        {tagName}
      </p>
    );
  });
  return (
    <>
      <div className="w-full uppercase text-white flex flex-row justify-start items-center text-center px-4 gap-2 flex-wrap">
        {renderTags}
      </div>
    </>
  );
}

export default Tags;
