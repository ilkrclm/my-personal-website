import { motion } from "framer-motion";


export default function ImgWrapper({ children, rounded="full", bg="white", bgOpacity="20", h="24", w="24", mt="12" }) {
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
      className={`relative rounded-${rounded} bg-${bg} bg-opacity-${bgOpacity} overflow-hidden h-${h} w-${w} mt-${mt} flex items-center justify-center flex-shrink-0`}>
      {children}
    </motion.div>
  )
}
