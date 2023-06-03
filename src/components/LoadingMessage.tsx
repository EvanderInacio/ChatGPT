import IconRobot from "./icons/IconRobot";

export default function LoadingMessage() {
  return (
    <div className="p-5 bg-emerald-300 w-fit rounded-md text-black">
      <div className=" max-w-4xl m-auto flex">
        <div className="w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded bg-emerald-500">
          <IconRobot width={24} height={24} />
        </div>
        <div className="flex-1 text-base whitespace-pre-wrap">
          <div className="w-2 h-4 bg-zinc-800 animate-blink"></div>
        </div>
      </div>
    </div>
  )
}