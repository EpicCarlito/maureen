import Image from "next/image";
import background from "../../public/background.gif";
import profilePicture from "../../public/profilePicture.gif";
import oranges from "../../public/oranges.gif";
import Divider from "../components/divider";

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
        <div className="flex flex-start gap-5 p-4 md:p-8">
          <div className="flex flex-col">
            <Image
              src={profilePicture}
              alt={`Profile Picture!`}
              unoptimized={true}
              className="w-[5rem] md:w-[6rem] h-auto border border-black"
            />
            <p className="font-Unbounded">maureen!</p>
          </div>
          <Divider height={6} stroke={1} />
          <div className="flex flex-col text-center text-base md:lg">
            <p className="font-TiltWarp">Preferred names: Maureen, Moon</p>
            <p className="font-TiltWarp">any pronouns ! biromantic</p>
          </div>
          <Divider height={6} stroke={1} />
          <Image
            src={oranges}
            alt={`yum, oranges!`}
            unoptimized={true}
            className="w-[5rem] md:w-[6rem] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
