import { motion, Transition, SVGMotionProps } from "framer-motion";

const MenuButton = ({
  menu = false,
  width = 24,
  height = 24,
  strokeWidth = 2,
  transition = null,
  lineProps = null,
  ...props
}) => {
  const variant = menu ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 1.9,
    }
  };
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -45,
      translateY: -1.9,
      
    }
  };
  lineProps = {
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps
  };
  const unitHeight = 5;
  const unitWidth = (unitHeight * (width)) / (height);

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line
        x1="-0.2"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="1"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        style={{ originX: "2.2px", originY: "4px" }}
        x1="-0.2"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};

export { MenuButton };