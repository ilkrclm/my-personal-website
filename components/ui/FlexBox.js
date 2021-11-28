
export default function FlexBox({children, p = 6, shadow = "xl", direction = "col", justify = "center", items = "center", bg = "gray-900", bgOpacity = 20, rounded = "3xl", backdropBlur = "2xl", maxWidth = "md", w = "full" }) {
  return (
    <div className={`relative bg-${bg} bg-opacity-${bgOpacity} backdrop-filter backdrop-blur-${backdropBlur} rounded-${rounded} w-${w} max-w-${maxWidth} flex flex-${direction} justify-${justify} items-${items} p-${p} shadow-${shadow}`}>
      {children}
    </div>
  )
}
