import Image from "next/image";
import background from "../../public/background.gif";
import profilePicture from "../../public/profilePicture.gif";
import oranges from "../../public/oranges.gif";
import Divider from "../components/divider";
import NowPlaying from "../components/nowPlaying";
import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute z-[-1] w-screen h-full md:p-4 bg-orange-300">
      <Image
        src={background}
        alt={`A cute animal!`}
        unoptimized={true}
        priority={true}
        className="w-screen h-full border border-black"
      />
      <div className="absolute inset-0 m-8 md:m-16 bg-orange-400 rounded border border-orange-500">
        <div className="flex flex-start justify-center items-center mx-4 mt-4 md:mx-8 md:mt-8">
          <Image
            src={profilePicture}
            alt={`Profile Picture!`}
            unoptimized={true}
            className="w-[5rem] md:w-[6rem] h-auto border border-black mr-[1rem]"
          />
          <Divider alwaysTall={true} />
          <div className="flex flex-col text-center ml-[1rem]">
            <h1 className="font-unbounded text-3xl text-[#7f5539] font-bold">
              maureen!
            </h1>
            <p className="font-tilt_warp text-base">
              Preferred names: Maureen, Moon
            </p>
            <p className="font-tilt_warp text-base">
              any pronouns ! biromantic
            </p>
          </div>
        </div>
        <div className="flex flex-start flex-col md:flex-row font-secular_one mx-4 my-2 md:mx-8 md:my-4">
          <p className="text-md md:mr-[1rem] mb-[0.5rem] md:mb-0">
            <b className="text-large">likes (media): </b>mp100, loz, buck-tick,
            duran duran, coma cinema, object shows, jjba, bloons td, 100% orange
            juice, pokemon, mhrise, dollars trilogy, jjk, and papa louie games!
          </p>
          <Divider />
          <p className="text-md md:mx-[1rem] my-[0.5rem] md:my-0">
            <b className="text-large">likes (general): </b>my friends, cool
            fashion, art, trains, oranges, broccoli, cheesecake, birds, sharks,
            cowboys, snow leopards and more &lt;:
          </p>
          <Divider />
          <p className="text-md md:mx-[1rem] my-[0.5rem] md:my-0">
            <b className="text-large">LOVE: </b>younger bro, and older bro !!
          </p>
          <Divider />
          <p className="text-md md:ml-[1rem] mt-[0.5rem] md:mt-0">
            <b className="text-large">dislikes: </b> petty people, tests on
            friday, math, pickles, perverted people (i dont really genuinely
            hate any human being tbh!)
          </p>
        </div>
        <div className="mx-4 md:mx-8">
          <Divider alwaysShort={true} />
        </div>
        <div className="flex mx-4 mt-2 md:mx-8">
          <NowPlaying />
          <Image
            src={oranges}
            alt={`yum, oranges!`}
            unoptimized={true}
            className="ml-[0.5rem] w-[5rem] md:w-[6rem] h-auto"
          />
        </div>
        <p className="text-xs ml-4 absolute bottom-[1rem]">
          Made by{" "}
          <Link href="https://epiccarlito.vercel.app/" className="underline">
            EpicCarlito
          </Link>
          {". "}
          Source in{" "}
          <Link
            href="https://github.com/EpicCarlito/maureen"
            className="underline"
          >
            Github
          </Link>
          {"!"}
        </p>
      </div>
    </div>
  );
}
