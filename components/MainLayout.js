import {useTheme} from 'next-themes'
import Icon from "./elements/Icon";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useRouter } from "next/router";
import Link from 'next/link';
import { Fragment, useEffect, useState } from "react";
import tr from "@/locales/tr";
import en from "@/locales/en";
import { Listbox, Transition } from '@headlessui/react'
import { MenuButton } from './ui/MenuButton';
import Fade from '@/components/motions/Fade'
import { NextSeo } from 'next-seo'
import ThemeSwitch from './ui/ThemeSwitch';

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

const defaultOgImage = `${process.env.NEXT_PUBLIC_URL}/images/og-image.png`



  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const item = {
    visible: { opacity: 1, },
    hidden: { opacity: 0,  },
  }

  export function HomeIcon({ theme }) {

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return theme === 'dark' ? <Icon icon="logoDark" className=" h-8 w-8 filter duration-300 drop-shadow-md transition-colors" /> : <Icon icon="logo" className="h-8 w-8 filter drop-shadow-md transition-all" />
}

export default function Layout({ children, image="/images/home-bg-dark.png", path, baslik, lang="tr_TR", description, ogImage=defaultOgImage }) {
  

  const url = path === "/" ? `${process.env.NEXT_PUBLIC_URL}`: `${process.env.NEXT_PUBLIC_URL}${path}`;
  const title = path === "/" ||  path === "/en" ? `IC | ${baslik}` : `${baslik} | IC `;
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  
    const [selectedLang, setSelectedLang] = useState()
  
  const handleSelect=(e)=>{
    setSelectedLang(activeLocale)
  }

  const t = activeLocale === 'tr' ? tr : en;
  
  const mobileLinks = [
  { name: `${t.home}`, to: `${activeLocale === 'tr' ? '/': '/en'}`, id: 1 },
  { name: `${t.portfolio}`, to: `${activeLocale === 'tr' ? '/portfolyo': '/en/portfolyo'}`, id: 2 },
  { name: `${t.about}`, to: `${activeLocale === 'tr' ? '/hakkimda': '/en/hakkimda'}`, id: 3 },
  { name: `${t.contact}`, to: `${activeLocale === 'tr' ? '/iletisim': '/en/iletisim'}`, id: 4 },
];
  const mobileIconLinks = [
  { icon: `twitter`, to: `https://www.twitter.com/ilkrclm/`, id: 1 },
  { icon: `instagram`, to: `https://www.instagram.com/ilkrclm/`, id: 2 },
  { icon: `dribbble`, to: `https://dribbble.com/ilkrclm/`, id: 3 },
  { icon: `github`, to: `https://github.com/ilkrclm/`, id: 4 },
];

  const [menu, cycleMenu] = useCycle(false, true);
  
  useEffect(() => {
    if (menu === true) {
      window.document.querySelector('body').style.overflow = "hidden"
    } else {
      window.document.querySelector('body').style.overflow = "unset"
    }
  }, [menu])

  
  const { theme } = useTheme()
  


  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          locale: lang,
          description,
          images: [
            {
              url: ogImage,
              alt: `${title} sayfası görseli`
            }
          ]
        }}
      />
      <div style={{backgroundImage: `url(${image})`}} className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-bottom w-full text-gray-800 dark:text-white">
        {/* <Image objectFit="cover" layout="fill" src={image} alt={'Background Image'} aria-hidden="true" priority={true} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer('100%', '100%'))}`}  /> */}
        <div className={`relative min-h-screen md:min-h-max md:h-screen lg:h-720 bg-gray-100 dark:bg-gray-900 dark:bg-opacity-30 bg-opacity-40 backdrop-filter backdrop-blur-2xl lg:rounded-3xl w-full md:max-w-screen-md lg:max-w-screen-lg md:overflow-hidden shadow-xl transition duration-200`}>
          <header className="relative flex justify-between w-full p-4 md:px-5">
            <AnimatePresence>
              {menu && (
                <motion.aside
                  style={{ originX: 1 }}
                  className={`bg-gradient-to-br ${theme === 'dark' ? "  from-indigo-500/90 via-purple-700/90 to-indigo-900/90" : "from-green-200/90 via-teal-400/90 to-blue-400/90"} z-10 h-full h-screen overflow-hidden backdrop-filter backdrop-blur-md fixed inset-0`}
                  initial={{ width: 0, x: "-100%" }}
                  animate={{
                    width: "100%", x: "0"
                  }}
                  exit={{
                    width: 0,
                    x: "100%",
                    transition: { delay: 0.7, duration: 0.5 }
                  }}
                >
                  <motion.div
                    className="flex flex-col w-full h-full items-center justify-center  backdrop-filter backdrop-blur-3xl"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sideVariants}
                  >
                  <Fade delay={0.1}>
                      {theme === 'dark' ? <Icon icon="logoDark" className=" h-12 w-12 mb-8 filter duration-300 drop-shadow-md transition-colors" /> : <Icon icon="logo" className="h-12 w-12 mb-8 filter drop-shadow-md transition-all" />}
                  </Fade>
                    {mobileLinks.map(({ name, to }, idx) => (
                        <motion.a
                          key={idx}
                          href={to}
                          onClick={cycleMenu}
                          whileHover={{ scale: 1.1 }}
                          variants={itemVariants}
                          className="text-2xl font-semibold text-gray-900 dark:text-white transition mb-7"
                        >
                          {name}
                        </motion.a>
                    ))}
                    <ul className="flex space-x-4 w-full justify-center items-center mt-4">
                      {mobileIconLinks.map(({ icon, to }, idx) => (
                        <motion.li key={idx} variants={itemVariants} whileHover={{ scale: 1.1 }} className="transition"><a href={to}><Icon icon={icon} className="h-8 w-8" /> </a></motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.aside>
              )}
            </AnimatePresence>
            <motion.a href={activeLocale === 'tr' ? '/' : '/en'} initial={{ scale: [0], opacity: 0 }} animate={{ scale: [0.5, 1.5, 1], opacity: 1 }} transition={{ delay: 1, duration: 0.8, type: "spring", stiffness: 300 }} className="relative p-1 rounded-lg hover:bg-white/10 flex items-center justify-center flex-shrink-0 " aria-label="Go to Home Page">
              <HomeIcon theme={theme} />
            </motion.a>
            <nav className="hidden md:block m-auto">
              <motion.ul  initial="hidden" animate="visible" variants={list} className="flex space-x-4 uppercase font-bold ">
                <motion.li variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`${router.pathname === "/" ? "shadow bg-white/10 dark:bg-gray-900/30 text-gray-900 dark:text-white": "text-gray-700 dark:text-gray-300 shadow-none"} px-4 py-1 rounded-xl relative hover:shadow-md active:shadow hover:bg-white/10`}><a href={activeLocale === 'tr' ? '/' : '/en'} className={`${router.pathname === '/' ? '': ''} `}>{t.home}</a></motion.li>
                <motion.li variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`${router.pathname === "/hakkimda" ? "shadow bg-white/10 dark:bg-gray-900/30 text-gray-900 dark:text-white": "text-gray-700 dark:text-gray-300 shadow-none"} px-4 py-1 rounded-xl relative hover:shadow-md active:shadow  hover:bg-white/10`}><a href={activeLocale === 'tr' ? '/hakkimda' : '/en/hakkimda'} className={`${router.pathname === '/hakkimda' ? '': ''} `}>{t.about}</a></motion.li>
                <motion.li variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`${router.pathname === "/portfolyo" ? "shadow bg-white/10 dark:bg-gray-900/30 text-gray-900 dark:text-white": "text-gray-700 dark:text-gray-300 shadow-none"} px-4 py-1 rounded-xl relative hover:shadow-md active:shadow  hover:bg-white/10`}><a href={activeLocale === 'tr' ? '/portfolyo' : '/en/portfolyo'} className={`${router.pathname === '/portfolyo' ? '': ''} `}>{t.portfolio}</a></motion.li>
                <motion.li variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`${router.pathname === "/iletisim" ? "shadow bg-white/10 dark:bg-gray-900/30 text-gray-900 dark:text-white": "text-gray-700 dark:text-gray-300 shadow-none"} px-4 py-1 rounded-xl relative hover:shadow-md active:shadow  hover:bg-white/10`}><a href={activeLocale === 'tr' ? '/iletisim' : '/en/iletisim'} className={`${router.pathname === '/iletisim' ? '': ''} `}>{t.contact}</a></motion.li>
              </motion.ul>
            </nav>
            <div className="flex space-x-2 item-center">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
              <Listbox value={activeLocale} onChange={handleSelect} >
                <div className="relative font-medium p-2 uppercase hover:bg-white/20 rounded-lg uppercase transition">
                  <Listbox.Button>
                    <span className="font-medium">{ activeLocale.toUpperCase() }</span>
                  </Listbox.Button>
                  <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" >
                    <Listbox.Options className="absolute z-20 -ml-4 xl:-ml-3 mt-1 overflow-auto text-base bg-white/10 dark:bg-gray-900/20 rounded-lg backdrop-filter backdrop-blur-3xl shadow-lg max-h-60 ring-1 ring-brand ring-opacity-5 focus:outline-none  ">
                      {locales.map((lang) => {
                        const { pathname, query, asPath } = router
                        return (
                          <Listbox.Option key={lang} className={"py-2 px-3 uppercase whitespace-nowrap text-brand text-left cursor-pointer select-none hover:bg-white/30 hover:dark:bg-gray-900/300 transition"}>
                            <Link href={{ pathname, query }}  as={asPath} locale={lang}>{lang}</Link>
                          </Listbox.Option>
                        )
                      })}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              </motion.div>
              <ThemeSwitch menu={menu} />
              <button aria-label={`Açılır Menüyü ${menu ? 'Kapat' : 'Göster'} `} className={`${menu ? ' fixed right-4 top-[18px]': ' relative'} p-1 pt-2 lg:hidden z-20`}>
                <MenuButton
                  menu={menu}
                  onClick={cycleMenu}
                  strokeWidth="2.5"
                />
              </button>
            </div>
          </header>
          <main className={`${router.pathname !== '/' ? '' : ''} px-4 xl:px-0 min-h-[inherit] h-full lg:h-[90%] flex flex-col items-center justify-center md:items-start`}>
            {children}
          </main>
          <footer>

          </footer>
        </div>
      </div>
    </>
  )
}
