export default function Btn({ children, className, ...props }) {
    return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}
