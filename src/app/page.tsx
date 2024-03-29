import Image from "next/image";
import background from "../../public/background.gif"
import profilePicture from "../../public/profilePicture.gif"

export default function Home() {
  return (
    <div className="absolute z-[-1] w-screen h-full p-4 bg-orange-300">
      <Image src={background} alt={`A cute animal!`} unoptimized={true} className="w-screen h-full border border-black" />
      <div className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-orange-400 rounded border border-orange-500
        w-[20rem] sm:w-[30rem] md:w-[35rem]
        h-[30rem] sm:h-[35rem]
      ">
        <div className="flex flex-start justify-center items-center">
          <Image src={profilePicture} alt={`A cute animal!`} unoptimized={true}
            className="w-[5rem] md:w-[6rem] h-auto border border-black" />
          <p className="font-Unbounded">maureen!🍊</p>
        </div>
      </div>
    </div>
  );
}
