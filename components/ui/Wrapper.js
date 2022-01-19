
const DEFAULT = "flex w-full";

const DIRECTION = {
  col: "flex-col",
  row: "flex-row"
};

export default function Wrapper({ children, className, direction }) {
  className = [DEFAULT, DIRECTION[direction], className,].join(" ")
  return (
    <div
      className={className}>
      {children}
    </div>
  )
}
