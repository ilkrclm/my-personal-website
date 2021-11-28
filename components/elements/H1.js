import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, x: -200 },
  show: { opacity: 1, x: 0 }
}

export default function H1({ children, ...props }) {
  return (
    <motion.h1
       initial={{
        y: -10,
        opacity: 0,
        scale: 0.1,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{delay: 1.1}}
      {...props}
    >
      {children}
    </motion.h1>
  )
}
