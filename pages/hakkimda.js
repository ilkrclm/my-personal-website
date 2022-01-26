import withTransition from "@/utils/withTransition"
import dynamic from 'next/dynamic';
// const MainLayout = dynamic(() => import('@/components/MainLayout'))
import MainLayout from '@/components/MainLayout'
const Stack = dynamic(() => import('@/components/ui/Stack'))
import { useTheme } from "next-themes"
import Image from 'next/image';
import Icon from "@/components/elements/Icon"
import {useRouter} from 'next/router';
import tr from "@/locales/tr";
import en from "@/locales/en";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const list = {
    visible: {
      opacity: 1,
      transition: {
        delay: 2.4,
        when: "beforeChildren",
        staggerChildren: 0.15,
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

const AboutPage = () => {
  const router = useRouter()
  const { locales, locale: activeLocale } = router

  const t = activeLocale === 'tr' ? tr : en;

  const {theme, setTheme} = useTheme()

   function bgImage() {

    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return theme === 'dark' ? "/images/home-bg-dark.png" : "/images/home-bg.png"
  
  }

  return (
    <MainLayout image={bgImage()} path={activeLocale === 'en' ? '/en/hakkimda' : '/hakkimda'} baslik={t.about_title} description={t.about_description} lang={activeLocale === 'tr' ? 'tr_TR' : 'en_US'}>
      
      <motion.div variants={list} className="flex flex-col md:flex-row md:space-x-16 m-auto pb-8 lg:p-8 w-full ">

        <motion.div variants={item} className="relative flex-shrink-0 md:max-w-[280px] overflow-hidden w-full flex flex-wrap md:flex-nowrap md:flex-col md:items-center md:text-center p-3  md:p-5 bg-white/5 dark:bg-gray-900/10 backdrop-blur-md rounded-3xl">
          <div className={`absolute bottom-0 inset-x-0 bg-gradient-to-r h-2 w-full ${theme === 'dark' ? "  from-indigo-400 via-purple-500 to-indigo-800" : "from-green-300 via-teal-400 to-blue-400"}`} aria-hidden="true"></div>
          <div className="h-32 md:h-52 w-5/12 md:w-full relative flex-shrink-0 rounded-4xl overflow-hidden shadow-md">
            <Image src={`/images/profile.png`} layout="fill" objectFit="cover" objectPosition={`top`} />
          </div>
          <div className="pl-4 md:pl-0 flex flex-col w-7/12 md:w-full">
            <h2 className="text-2xl md:text-3xl mt-2 font-bold text-gray-700 dark:text-gray-100">İlker Çalım</h2>
            <p className="relative text-sm md:text-base mt-2 text-gray-600 dark:text-gray-300 font-medium"><span className="absolute text-2xl md:text-3xl font-bold -left-2.5 -top-3 md:left-0">“</span>{t.about_subtext}</p>
            <small className="text-xs md:text-sm mt-0.5 text-gray-600 dark:text-gray-300 font-bold text-center">{t.about_subtext_author}</small>
          </div>
          
          <div className="flex justify-between mx-auto mt-4 md:t-8 max-w-[240px] md:max-w-none w-full px-4">
            <div className="flex flex-col space-y-0.5 font-bold text-sm">
              <span className="font-bold text-gray-600 dark:text-gray-400">{t.about_designed}</span>
              <span >10</span>
            </div>
            <div className="flex flex-col space-y-0.5 font-bold text-sm">
              <span className="font-bold text-gray-600 dark:text-gray-400">{t.about_developed}</span>
              <span >15</span>
            </div>
          </div>

          <div className="mt-4 md:mt-8 mb-2 mx-auto flex space-x-2.5 px-4">
            <a href="https://www.twitter.com/ilkrclm/" target="_blank" rel="noopener norefferer" aria-label="" className="flex items-center justify-center h-11 w-11 rounded-full text-gray-600 dark:text-gray-200 bg-white/20 dark:bg-gray-900/20 shadow">
              <Icon icon="twitter" className="h-6 w-6" />
            </a>
            <a href="`https://www.instagram.com/ilkrclm/" target="_blank" rel="noopener norefferer" aria-label="" className="flex items-center justify-center h-11 w-11 rounded-full text-gray-600 dark:text-gray-200 bg-white/20 dark:bg-gray-900/20 shadow">
              <Icon icon="instagram" className="h-6 w-6" />
            </a>
            <a href="https://dribbble.com/ilkrclm/" target="_blank" rel="noopener norefferer" aria-label="" className="flex items-center justify-center h-11 w-11 rounded-full text-gray-600 dark:text-gray-200 bg-white/20 dark:bg-gray-900/20 shadow">
              <Icon icon="dribbble" className="h-6 w-6" />
            </a>
            <a href="https://github.com/ilkrclm/" target="_blank" rel="noopener norefferer" aria-label="" className="flex items-center justify-center h-11 w-11 rounded-full text-gray-600 dark:text-gray-200 bg-white/20 dark:bg-gray-900/20 shadow">
              <Icon icon="github" className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-8 md:mt-0 flex flex-col w-full">
          <h1 className="text-3xl md:text-4xl font-bold uppercase">{t.about_title}</h1>
          <p className="text-base md:text-lg mt-2 font-medium text-gray-700 dark:text-gray-200">{t.about_description}</p>
          <div className="flex flex-col md:flex-row md:space-x-8 w-full mt-6">
            <div className="mt-6 md:mt-0 order-last md:order-first flex flex-col md:w-1/2">
              <h3 className="font-bold text-gray-600 dark:text-gray-300">{t.about_experience}</h3>
              <div className="flex space-x-2 mt-4 items-start">
                <Icon icon="work" className="h-8 w-8 flex-shrink-0" />
                <div className="flex flex-col space-y-0.5 pt-1">
                  <span className="font-bold">{t.about_job1_duration}</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{t.about_job1}</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-5 items-start">
                <Icon icon="work" className="h-8 w-8 flex-shrink-0" />
                <div className="flex flex-col space-y-0.5 pt-1">
                  <span className="font-bold">2020 - 2021</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{t.about_job2}</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-5 items-start">
                <Icon icon="work" className="h-8 w-8 flex-shrink-0" />
                <div className="flex flex-col space-y-0.5 pt-1">
                  <span className="font-bold">{t.about_job3_duration}</span>
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{t.about_job3}</span>
                </div>
              </div>
            </div>
            <motion.div variants={list} className="flex flex-col md:w-1/2">
              <h3 className="font-bold text-gray-600 dark:text-gray-300">{t.about_qualifications}</h3>
              <div className="mt-4 flex-wrap">
                <Stack delay={1.1} image="/images/html.jpg" percent="100%" text="Html" />
                <Stack delay={1.2} image="/images/css.png" percent="100%" text="Css" />
                <Stack delay={1.3} image="/images/tailwindcss.png" percent="100%" text="TailwindCss" />
                <Stack delay={1.4} image="/images/javascript.png" percent="80%" text="JavaScript" />
                <Stack delay={1.5} image="/images/nextjs.png" percent="90%" text="Next JS" />
                <Stack delay={1.6} image="/images/strapi.png" percent="75%" text="Strapi" />
                <Stack delay={1.7} image="/images/alpinejs.png" percent="75%" text="Alpine JS" />
                <Stack delay={1.8} image="/images/graphql.png" percent="65%" text="Graphql" />
                <Stack delay={1.9} image="/images/nuxtjs.png" percent="45%" text="Nuxt JS" />
                <Stack delay={2.0} image="/images/vuejs.png" percent="45%" text="Vue JS" />
                <Stack delay={2.1} image="/images/mongodb.png" percent="40%" text="Mongo DB" />
                <Stack delay={2.2} image="/images/firebase.png" percent="50%" text="Firebase" />
                <Stack delay={2.3} image="/images/github.png" percent="70%" text="Github" />
              </div>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
      
    </MainLayout>
  )
}

export default withTransition(AboutPage)
