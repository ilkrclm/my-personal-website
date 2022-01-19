import { motion } from "framer-motion";

export default function PopOut({children, delay=0, ...props}) {
  return (
    <motion.div {...props}
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition:{ duration: 0.5, delay: delay, type: 'spring', stiffness: 300 } }}
      
    >
        {children}
    </motion.div>
  )
}
