
export default function FlexBox({as:Tag="div", children, direction="col", justify="center", align="center", className, ...props }) {
  return (
    <Tag className={`flex flex-${direction} justify-${justify} items-${align} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
