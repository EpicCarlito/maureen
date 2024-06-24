import Image from "next/image";
import Link from "next/link";
import background from "../../public/background.gif";
import oranges from "../../public/oranges.gif";
import Divider from "../components/divider";
import NowPlaying from "../components/nowPlaying";
import ProfileCard from "./home/profileCard";
import AboutMe from "./home/aboutMe";

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
      <div className="absolute inset-0 opacity-95 m-4 md:m-12 bg-orange-400 rounded border border-orange-500">
        <ProfileCard />
        <AboutMe />
        <div className="mx-4 md:mx-8">
          <Divider alwaysShort={true} />
        </div>
        <div className="flex mx-4 mt-1 md:mt-2 md:mx-8">
          <NowPlaying />
          <Image
            src={oranges}
            alt={`yum, oranges!`}
            unoptimized={true}
            className="ml-[0.5rem] w-[4rem] md:w-[5rem] h-auto"
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
