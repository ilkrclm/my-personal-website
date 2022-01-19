import Icon from "../elements/Icon";
import Img from "../elements/Img";

export default function TechItem({img, title, percent}) {
  return (
    <div className="flex items-start space-x-3 font-bold mt-4">
        <div className="relative flex-shrink-0 h-10 w-10 rounded-xl overflow-hidden">
          <Img src={img} />
        </div>
        <div className="flex flex-col items-start w-full">
          <div className="flex justify-between w-full">
            <span>{title}</span>
            <button className="inline-block p-1 bg-white bg-opacity-10 rounded-xl">
              <Icon icon="menu" className="h-4 w-4" />
            </button>
          </div>
          <span className="mt-2 relative flex overflow-hidden block w-full rounded-full bg-white bg-opacity-10 h-2">
            <span className={`bg-white bg-opacity-80 w-${percent}/12 h-2 absolute left-0 rounded-full`}></span>
          </span>
        </div>
      </div>
  )
}
