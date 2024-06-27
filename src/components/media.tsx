"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const media = {
  games: `legend of zelda, <b>monster hunter</b>, pokemon, <b>night in the woods</b>, bloons td,
          papa louie games, kirby, hollow knight, hades, fortnite,
          <b>tomadachi life</b>, splatoon, smash bros.`,
  media: `sci-fi movies, <b>westerns</b>, <b>mob psycho</b>, dungeon meshi,
          fmab, jjk, <b>jjba</b>, <b>community</b>, redline, the truman show,
          its always sunny in philadelphia, the thing, the legend of hei,
          hamilton, heathers, adventure time, tawog, lmk.`,
  music: `indie, hard rock,
          visual kei, jpop, new wave, <b>weezer</b>, duran duran, 
          <b>coma cinema</b>, eiafuawn, <b>foo fighters</b>, deep purple, 
          <b>rainbow</b>, black sabbath, <b>kiss</b>, tommy february6, 
          <b>tally hall</b>, radiator hospital, ultravox, the crykle, 
          <b>croix allcine</b>, buck tick, malice mizer, <b>carseat headrest</b>
          , <b>sweet trip</b>, cryogeyser, <b>amoyamo</b>, inoha, mildura, 
          <b>sade</b>....and way way way more.`,
  extras: `<b>homestuck</b>, object shows, lostwave.`,
};

interface props {
  element: string;
}

interface categoryProps {
  name: string;
  label: string;
  category: string;
  setCategory: (newCategory: string) => void;
}

function FormatBold(props: props) {
  function parseHTML(element: string) {
    const parser = new DOMParser();
    const parsedHTML = parser.parseFromString(element, "text/html");
    return parsedHTML.body.innerHTML;
  }

  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: parseHTML(props.element) }} />
    </>
  );
}

function CategorySection(props: categoryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isCategory = props.category === props.name;

  const toggleCategory = () => {
    setIsOpen(!isOpen);
    props.setCategory(props.name);
  };

  return (
    <p className="text-xs md:text-sm">
      <b className="text-sm sm:text-md cursor-pointer" onClick={toggleCategory}>
        {props.label}
      </b>{" "}
      {isOpen && isCategory && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm sm:text-md"
        >
          <FormatBold
            element={
              media[props.name as "games" | "media" | "music" | "extras"]
            }
          />
        </motion.div>
      )}
    </p>
  );
}

function MediaViewMobile() {
  const [category, setCategory] = useState("");

  function toggle(newCategory: string) {
    if (newCategory === category) {
      setCategory("");
    } else {
      setCategory(newCategory);
    }
  }

  return (
    <div className="flex flex-col md:hidden">
      <CategorySection
        name="games"
        label="(games): "
        category={category}
        setCategory={toggle}
      />
      <CategorySection
        name="media"
        label="(movies/shows/anime/musical): "
        category={category}
        setCategory={toggle}
      />
      <CategorySection
        name="music"
        label="(music): "
        category={category}
        setCategory={toggle}
      />
      <CategorySection
        name="extras"
        label="(extras): "
        category={category}
        setCategory={toggle}
      />
    </div>
  );
}

export default function MediaView() {
  return (
    <>
      <b className="text-sm md:text-md">likes (media): </b>
      <div className="hidden md:flex md:flex-col">
        <p className="text-xs md:text-sm">
          <b className="text-sm md:text-md">(games): </b>
          <FormatBold element={media.games} />
        </p>
        <p className="text-xs md:text-sm">
          <b className="text-sm md:text-md">(movies/shows/anime/musical): </b>
          <FormatBold element={media.media} />
        </p>
        <p className="text-xs md:text-sm">
          <b className="text-sm md:text-md">(music): </b>
          <FormatBold element={media.music} />
        </p>
        <p className="text-xs md:text-sm">
          <b className="text-sm md:text-md">(extras): </b>
          <FormatBold element={media.extras} />
        </p>
      </div>
      <MediaViewMobile />
    </>
  );
}
