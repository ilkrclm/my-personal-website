import Img from "../elements/Img";

export default function Stack({percent, text, image}) {
  return (
    <div className="relative inline-flex m-1 items-center shadow-md overflow-hidden bg-white/10 rounded-full p-1 pr-2">
        <span style={{width: `${percent}`}} className="bg-gradient-to-r from-white/10 dark:from-black/10 to-green-300/30 dark:to-indigo-300/30 absolute h-full left-0" aria-hidden="true"></span>
        <div className="bg-white h-6 w-6 relative rounded-full overflow-hidden">
          <Img src={image} alt="" />
        </div>
        <div className="relative ml-1.5 text-sm font-semibold">{text}</div>
      </div>
  )
}
