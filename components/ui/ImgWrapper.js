import { motion } from "framer-motion";


export default function ImgWrapper({ children }) {
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
      transition= {{delay: 0.7}}
      className={`relative rounded-full bg-white bg-opacity-20 overflow-hidden h-24 w-24 mt-12 flex items-center justify-center flex-shrink-0`}>
      {children}
    </motion.div>
  )
}
