import Divider from "../../components/divider";

export default function AboutMe() {
  return (
    <div className="flex flex-start flex-col font-secular_one mx-4 md:mx-8">
      <div className="flex flex-col">
        <b className="text-sm">likes (media): </b>
        <p className="text-xs">
          <b>(games):</b> legend of zelda, <b>monster hunter</b>, pokemon,{" "}
          <b>night in the woods</b>, bloons td, papa louie games, kirby, hollow
          knight, hades, fortnite,
          <b>tomadachi life</b>, splatoon, smash bros.
        </p>
        <p className="text-xs">
          <b>(movies/shows/anime/musical):</b> sci-fi movies, <b>westerns</b>,{" "}
          <b>mob psycho</b>, dungeon meshi, fmab, jjk, <b>jjba</b>,{" "}
          <b>community</b>, redline, the truman show, its always sunny in
          philadelphia, the thing, the legend of hei, hamilton, heathers,
          adventure time, tawog, lmk.
        </p>
        <p className="text-xs">
          <b>(music):</b> indie, hard rock, visual kei, jpop, new wave,{" "}
          <b>weezer</b>, duran duran, <b>coma cinema</b>, eiafuawn,{" "}
          <b>foo fighters</b>, deep purple, <b>rainbow</b>, black sabbath,{" "}
          <b>kiss</b>, tommy february6, <b>tally hall</b>, radiator hospital,
          ultravox, the crykle, <b>croix allcine</b>, buck tick, malice mizer,{" "}
          <b>carseat headrest</b>, <b>sweet trip</b>, cryogeyser, <b>amoyamo</b>
          , inoha, mildura, <b>sade</b>....and way way way more.
        </p>
        <p className="text-xs">
          <b>(extras):</b> <b>homestuck</b>, object shows, lostwave.
        </p>
      </div>
      <Divider alwaysShort={true} />
      <p className="text-xs">
        <b className="text-sm">likes (general): </b>my friends, cool fashion,{" "}
        <b>art</b>, graphic design, trains, <b>oranges</b>, cheesecake, sharks,
        snow leopards, <b>magpies</b>, <b>cowboys</b>, bird watching, cringe
        2000s stuff, cool temperature, people who wear glasses, bracelets.
      </p>
      <Divider alwaysShort={true} />
      <p className="text-xs">
        <b className="text-sm">LOVE: </b>younger bro, older bro, L and J !!
      </p>
      <Divider alwaysShort={true} />
      <p className="text-xs">
        <b className="text-sm">dislikes: </b> (DNI) <b>basic dni criteria</b>,
        people who genuinely stick to music stereotypes (is this too specific?),{" "}
        <b>proshitters</b>. (not fond with) tests, physics, pickles,{" "}
        <b>petty behavior</b>, grade braggers.
      </p>
    </div>
  );
}
