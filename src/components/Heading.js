import React from "react";

const Heading = ({ title }) => {
  const words = title.split(" ");
  const middleIndex = Math.floor(words.length / 2);
  const highlightedWord = words[middleIndex];
  return (
    <div>
      <div className="flex relative items-end px-10">
        <span className="hollow text-transparent font-extrabold text-8xl poppins uppercase tracking-[1.5rem] opacity-20">
          Khety Traders
        </span>
        <h1 className="absolute text-5xl tracking-widest uppercase font-extrabold text-[#575757]">
          {words.slice(0, middleIndex).join(" ")}{" "}
          <span className="text-[#FABA02]">{highlightedWord}</span>{" "}
          {words.slice(middleIndex + 1).join(" ")}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
