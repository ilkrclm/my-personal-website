export default function P({ children, ...props }) {
  return (
    <p {...props}>
      {children}
    </p>
  )
}
