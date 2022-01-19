import { motion } from "framer-motion";

export default function MotionText({ initial={y: -10,opacity: 0,scale: 0.1,}, animate={y: 0,opacity: 1,scale: 1}, transition={ delay: 1 }, children, ...props}) {
  return (
    <motion.div {...props} initial={ initial }
        animate={ animate }
        transition={transition}>
      {children}
    </motion.div>
  )
}
