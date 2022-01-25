import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Button from "../tags/Button";  

const svgVariants = {
    hidden: { rotate: -360, opacity:0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition:{duration: 1, delay: 1.2}
    }
  }

function ThemeSwitch({menu}) {

  const { theme, setTheme } = useTheme()
  
  // const [mounted, setMounted] = useState(false)
  // useEffect(() => setMounted(true), [])

  // if (!mounted) return null

  return (
     <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={`${menu ? ' pr-10': 'pr-1'} hover:bg-white rounded-md hover:bg-opacity-20 transition-all focus:outline-none focus:ring ring-gray-300 dark:ring-gray-800 p-1`} aria-label="Toggle Dark Mode" type="button">
      {(
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-gray-900 dark:text-white"
          variants={svgVariants} initial="hidden" animate="visible"
        >
          {theme === 'dark' ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
          )}
        </motion.svg>
      )}
    </Button>
  );
}

export default ThemeSwitch;