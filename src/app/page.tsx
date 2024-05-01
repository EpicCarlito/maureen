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
        <div className="flex flex-start justify-center items-center gap-5 mx-4 mt-4 md:mx-8 md:mt-8">
          <Image
            src={profilePicture}
            alt={`Profile Picture!`}
            unoptimized={true}
            className="w-[5rem] md:w-[6rem] h-auto border border-black"
          />
          <Divider alwaysTall={true} />
          <div className="flex flex-col text-center">
            <h1 className="font-Unbounded text-2xl text-[#593000] font-bold">
              maureen!
            </h1>
            <p className="font-TiltWarp text-base">
              Preferred names: Maureen, Moon
            </p>
            <p className="font-TiltWarp text-base">any pronouns ! biromantic</p>
          </div>
        </div>
        <div className="flex flex-start flex-col md:flex-row gap-1 sm:gap-3 mx-4 mt-2 md:mx-8 md:mt-4">
          <p className="text-sm">
            <b className="text-md">likes (media): </b>mp100, loz, buck-tick,
            duran duran, coma cinema, object shows, jjba, bloons td, 100% orange
            juice, pokemon, mhrise, dollars trilogy, mahito, and papa louie
            games!
          </p>
          <Divider />
          <p className="text-sm">
            <b className="text-md">likes (general): </b>my friends, cool
            fashion, art, trains, oranges, broccoli, cheesecake, birds, sharks,
            cowboys, snow leopards and more &lt;:
          </p>
          <Divider />
          <p className="text-sm">
            <b className="text-md">LOVE: </b>younger bro, and older bro !!
          </p>
          <Divider />
          <p className="text-sm">
            <b className="text-md">dislikes: </b> petty people, tests on friday,
            math, pickles, perverted people (i dont really genuinely hate any
            human being tbh!)
          </p>
        </div>
        <div className="mx-4 mt-2 md:mx-8 md:mt-4">
          <Divider alwaysShort={true} />
        </div>
        <div className="flex flex-start gap-5 p-4 md:p-8">
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
