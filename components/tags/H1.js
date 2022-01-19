export default function H1({ children, className, ...props }) {
  return (
    <h1 {...props} className={` ${className}`}>
      {children}
    </h1>
  )
}
