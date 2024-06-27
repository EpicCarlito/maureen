import Image from "next/image";

export default function friendAdventure() {
  return (
    <div className="border border-black rounded p-1 ml-[0.5rem]">
      <a
        href="https://mspfa.com/?s=57152&p=1"
        target="_blank"
        className="flex flex-row"
      >
        <Image
          src="https://file.garden/ZjsGtL_lO22UwcOv/Screen%20Shot%202024-05-08%20at%201.11.48%20AM.png"
          width={500}
          height={500}
          alt="logo"
          className="w-auto h-[3rem] md:h-[3.5rem]"
        />
        <div className="text-sm md:text-md ml-[0.5rem]">
          <p>my epic friend's adventure:</p>
          <b className="text-md md:text-lg">Dumbstruck</b>
        </div>
      </a>
    </div>
  );
}
