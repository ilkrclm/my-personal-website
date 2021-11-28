import Icon from "./Icon";

export default function IconLink({href, icon}) {
  return (
    <a href={href}>
      <Icon icon={icon} className="h-7 w-7" />
    </a>
  )
}
