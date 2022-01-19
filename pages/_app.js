// import 'tailwindcss/tailwind.css'
import '../styles/ReactToastify.css'
import '../styles/swiper-bundle.min.css'
import '../styles/tailwind.css'
import { AnimatePresence } from "framer-motion"
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  )
}

export default MyApp
