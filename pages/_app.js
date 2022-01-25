// import 'tailwindcss/tailwind.css'
import '../styles/ReactToastify.css'
import '../styles/swiper-bundle.min.css'
import '../styles/tailwind.css'
import { AnimatePresence } from "framer-motion"
import { ThemeProvider } from 'next-themes'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <AnimatePresence exitBeforeEnter>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Component {...pageProps} />
        </ThemeProvider>
      </AnimatePresence>
    </>
  )
}

export default MyApp
