import { motion } from "framer-motion";

export default function Fade({children, delay=0, ...props}) {
  return (
    <motion.div {...props} initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{duration: 1, delay: delay, type: 'spring'}}>
      {children}
    </motion.div>
  )
}
