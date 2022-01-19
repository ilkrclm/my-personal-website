import { motion } from "framer-motion";

export default function AnimatedTitle({delay=0, children, ...props}) {
  return (
    <motion.div {...props} initial={{
        y: -10,
        opacity: 0,
        scale: 0.1,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{delay: delay}}>
      {children}
    </motion.div>
  )
}
