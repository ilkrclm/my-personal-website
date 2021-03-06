import { motion } from "framer-motion";


export default function ImgWrapper({ children, ...props }) {
  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{ delay: 0.7 }}
    {...props}>
      {children}
    </motion.div>
  )
}
