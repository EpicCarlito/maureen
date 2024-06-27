import Image from "next/image";
import profilePicture from "../../../public/profilePicture.gif";

export default function ProfileCard() {
  return (
    <div className="flex flex-start justify-center items-center">
      <Image
        src={profilePicture}
        alt={`Profile Picture!`}
        unoptimized={true}
        className="w-[4.5rem] md:w-[6rem] h-auto border border-black"
      />
      <div className="flex flex-col text-center ml-[1rem]">
        <h1 className="font-unbounded text-xl md:text-3xl text-[#7f5539] font-bold">
          maureen!
        </h1>
        <p className="font-tilt_warp text-sm md:text-lg">
          Preferred names: Maureen, Moon
        </p>
        <p className="font-tilt_warp text-sm md:text-lg">
          any pronouns ! biromantic
        </p>
      </div>
    </div>
  );
}
