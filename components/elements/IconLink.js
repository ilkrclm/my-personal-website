import Icon from "./Icon";

export default function IconLink({href, icon, color="blue-700"}) {
  return (
    <a href={href} className={`p-1 rounded-lg inline-block  hover:bg-white hover:shadow-md hover:text-${color} hover:bg-opacity-10 cursor-pointer`}>
      <Icon icon={icon} className="h-7 w-7" />
    </a>
  )
}
