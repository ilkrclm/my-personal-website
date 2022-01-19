import { motion } from "framer-motion"
import Link from "next/link"

export default function ButtonLink({ href, mt = 4, pl = 6, pr = 6, children }) {
  
  return (
    <Link href={href} passHref>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{type:"spring", stiffness:500}}
        className={`mt-${mt} py-2 pl-${pl} pr-${pr} w-full inline-flex whitespace-nowrap space-x-2 px-4 items-center font-semibold bg-white dark:bg-gray-900 rounded-full shadow-lg bg-opacity-10 hover:bg-opacity-20 dark:bg-opacity-30 hover:dark:bg-opacity-50`}>
        {children}
      </motion.a>
    </Link>
  )
}
