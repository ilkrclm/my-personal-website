import Icon from "../elements/Icon";

export default function JobItem({title, dates}) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-start space-x-2 font-bold mt-4 w-full">
        <Icon icon="work" className="h-8 w-8 -mt-0.5" />
        <div className="flex flex-col items-start flex-1">
          <span>{ dates }</span>
          <p className="text-sm opacity-80 font-medium">{title}</p>
        </div>
        <button className="inline-flex ml-auto flex-shrink-0 rounded-full p-1 bg-white bg-opacity-10 shadow">
          <Icon icon="send" className="h-5 w-5 " />
        </button>
      </div>
    </div>
  )
}
