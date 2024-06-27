import Image from "next/image";
import oranges from "../../public/oranges.gif";
import Divider from "../components/divider";
import NowPlaying from "../components/nowPlaying";
import ProfileCard from "./home/profileCard";
import AboutMe from "./home/aboutMe";
import Credit from "./home/credit";
import Adventure from "./home/adventure";

export default function Home() {
  return (
    <div className="h-dvh bg-orange-300 p-0 sm:p-4">
      <div
        className="h-full border border-black bg-cover bg-center p-4 md:p-6"
        style={{ backgroundImage: "url(/background.gif)" }}
      >
        <div className="h-full flex flex-col justify-between opacity-95 bg-orange-400 border border-orange-500 rounded p-4">
          <div>
            <ProfileCard />
            <AboutMe />
            <Divider />
            <div className="flex flex-row items-center">
              <NowPlaying />
              <Adventure />
              <Image
                src={oranges}
                alt={`yum, oranges!`}
                unoptimized={true}
                className="w-auto h-[3.5rem] md:h-[4.5rem] ml-[0.5rem]"
              />
            </div>
          </div>
          <Credit />
        </div>
      </div>
    </div>
  );
}
