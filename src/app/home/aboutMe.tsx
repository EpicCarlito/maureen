import Divider from "../../components/divider";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function AboutMe() {
  const Media = useMemo(
    () =>
      dynamic(() => import("../../components/media"), {
        ssr: false,
      }),
    []
  );
  
  return (
    <div className="flex flex-start flex-col font-secular_one mt-1 md:mt-0">
      <Media />
      <Divider />
      <p className="text-sm">
        <b className="text-md">likes (general): </b>my friends, cool fashion,{" "}
        <b>art</b>, graphic design, trains, <b>oranges</b>, cheesecake, sharks,
        snow leopards, <b>magpies</b>, <b>cowboys</b>, bird watching, cringe
        2000s stuff, cool temperature, people who wear glasses, bracelets.
      </p>
      <Divider />
      <p className="text-sm">
        <b className="text-md">LOVE: </b>younger bro, older bro, L and J !!
      </p>
      <Divider />
      <p className="text-sm">
        <b className="text-md">dislikes: </b> (DNI) <b>basic dni criteria</b>,
        people who genuinely stick to music stereotypes (is this too specific?),{" "}
        <b>proshitters</b>. (not fond with) tests, physics, pickles,{" "}
        <b>petty behavior</b>, grade braggers.
      </p>
    </div>
  );
}
