export default function Text({as: Tag, text, ...props}) {
  return (
    <Tag {...props} >
      {text}
    </Tag>
  )
}
