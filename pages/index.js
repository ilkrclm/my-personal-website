import dynamic from 'next/dynamic';
const MainLayout = dynamic(() => import('@/components/MainLayout'))
import ButtonLink from '@/components/elements/ButtonLink'
import Icon from '@/components/elements/Icon'
import Text from '@/components/elements/Text'
import { useTheme } from 'next-themes'
import H1 from '@/components/tags/H1'
import FlexBox from '@/components/ui/FlexBox'
import P from '@/components/tags/P'
import Img from '@/components/elements/Img'

import SwiperCore, { Controller, Pagination, A11y, EffectFade, EffectCreative, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import "swiper/css/effect-creative"
import { useState } from 'react'
import withTransition from '@/utils/withTransition'
import Fade from '@/components/motions/Fade'
import { motion } from 'framer-motion'
import PopOut from '@/components/motions/PopOut'
import { useRouter } from 'next/router';
import tr from '@/locales/tr';
import en from '@/locales/en';
SwiperCore.use([ Pagination, A11y, EffectCreative, EffectFade, Navigation, Autoplay ]);

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
  const slideList = {
    visible: {
      x: 0,
      transition: {
        delay: 3.8,
        duration: 0.3,
        type: 'spring',
        stiffness: 30,
        restDelta: 1
      },
    },
    hidden: {
      x: '100%',
    },
  }

  const item = {
    visible: { opacity: 1, },
    hidden: { opacity: 0,  },
  }

const Home = () => {

  const router = useRouter()
  const { locales, locale: activeLocale } = router

  const t = activeLocale === 'tr' ? tr : en;

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const time = new Date
  const hour = time.getHours()
  const minutes = time.getMinutes()
  const dayTime = `${hour}:${minutes}`
  const {theme} = useTheme()

  let homeTitle = `${t.home_title1.toLowerCase()} ${t.home_title2.toLowerCase()} ${t.home_title3.toLowerCase()}`
  homeTitle = homeTitle.slice(0, 1).toUpperCase() + homeTitle.slice(1)
  return (
    <MainLayout image={theme === 'dark' ? "/images/home-bg-dark.png" : "/images/home-bg.png"} path={activeLocale === 'en' ? '/en' : '/'} baslik={homeTitle} description={t.home_subtitle.substring(0, 150)} >
      <FlexBox direction='col md:flex-row' justify="between" align="center" className="w-full flex-wrap">
        <FlexBox align="items-start" className="mt-8 md:mt-0 md:p-8 md:w-1/2">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.5, delay: 2.1, type: 'spring'}} className="inline-flex mr-auto space-x-2 bg-gray-600/10 text-gray-800 dark:text-gray-100 dark:bg-white/10 items-center mb-3 text-sm rounded-full pl-2 pr-4 py-0.5 shadow-inner  uppercase tracking-wider font-bold">
            <span className="relative inline-flex h-3 w-3" aria-hidden="true">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 bg-green-500`}></span>
            </span>
            <span>{t.home_available}</span>
          </motion.div>
          <Fade delay={2.2}>
            <H1 className="text-2xl md:text-3xl font-bold tracking-tight leading-9">{t.home_title1} <br />{t.home_title2} <br /> {t.home_title3}</H1>
          </Fade>
          <Fade delay={2.3}>
            <P className="mt-4 font-medium">{t.home_subtitle}</P>
          </Fade>
          <motion.div initial="hidden" animate="visible" variants={list} className="flex items-center flex-wrap justify-start divide-x divide-gray-900/30 dark:divide-gray-500 text-sm font-bold mt-4">
            <motion.span variants={item} className="px-2">#Next.js</motion.span>
            <motion.span variants={item} className="px-2">#TailwindCss</motion.span>
            <motion.span variants={item} className="px-2">#Strapi</motion.span>
            <motion.span variants={item} className="px-2">#Graphql</motion.span>
            {!expanded && (
              <motion.button onClick={() => setExpanded(true)} variants={item} className="ml-2 px-4 font-black rounded-full bg-white/20 border-none shadow-md" aria-label={t.aria_open_list}>...</motion.button>
              )}
            {expanded && (
              <>
                <motion.span variants={item} className="px-2 border-none lg:border-solid">#Github</motion.span>
                <motion.span variants={item} className="px-2 lg:border-none">#Html</motion.span>
                <motion.span variants={item} className="px-2">#Css</motion.span>
                <motion.span variants={item} className="px-2">#Javascript</motion.span>
                <motion.span variants={item} className="px-2">#Vue.js</motion.span>
                <motion.span variants={item} className="px-2 border-none lg:border-solid">#Alpine.js</motion.span>
                <motion.span variants={item} className="px-2">#React.js</motion.span>
                <motion.span variants={item} className="px-2 lg:border-none">#Firebase</motion.span>
                <motion.span variants={item} className="px-2 ">#Nuxt.js</motion.span>
                <motion.span variants={item} className="px-2 border-none lg:border-solid">#Node.js</motion.span>
                <motion.span variants={item} className="px-2">#MongoDB</motion.span>
                <motion.span variants={item} className="px-2 lg:border-none">#Framer Motion</motion.span>
                <motion.button onClick={() => setExpanded(false)} variants={item} className="ml-2 px-2 font-black rounded-full bg-white/20 border-none shadow-md" aria-label={t.aria_close_list}>×</motion.button>
              </>
            )}
          </motion.div>
          <FlexBox direction="row" justify="start" className="mt-4 space-x-6" >
            <PopOut delay={3.4}>
              <ButtonLink href={activeLocale === 'tr' ? '/hakkimda' : '/en/hakkimda'}>
                <Text as="span" text={`${t.home_button1} ➔`} />
              </ButtonLink>
            </PopOut>
            <PopOut delay={3.5}>
              <ButtonLink href={activeLocale === 'tr' ? '/portfolyo' : '/en/portfolyo'}>
                <Text as="span" text={`${t.home_button2} ➔`} />
              </ButtonLink>
            </PopOut>
          </FlexBox>
        </FlexBox>
        <motion.div initial="hidden" animate="visible" variants={slideList} className="ml-auto mt-12 md:mt-0 pb-24 md:pb-0 flex relative w-full md:w-1/2">
          <Swiper id="projects-slider" modules={[Controller]} controller={{ control: secondSwiper }} onSwiper={setFirstSwiper} effect="fade" slidesPerView={1} spaceBetween={50} loop autoplay={{ delay: 10000 }} className="flex pt-7 md:pt-9 flex-col relative max-w-3xl w-full ml-auto -mr-4 md:-mr-16 shadow-lg overflow-hidden">
            <div className="absolute z-10 overflow-hidden top-0 w-full h-7 md:h-9 rounded-tl-lg bg-gray-100/30 dark:bg-gray-900/30 transition backdrop-blur-md flex overflow-hidden justify-start items-center space-x-1.5 px-2">
                <span className="relative w-3 h-3 rounded-full bg-red-500"></span>
                <span className="relative w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="relative w-3 h-3 rounded-full bg-lime-500"></span>
            </div>
              <SwiperSlide className="relative overflow-hidden h-[17.3rem] md:h-96 w-full rounded-b-lg border-t-0">
                <Img src="/images/vahacreative-desktop.png" alt="Vaha Creative Dijital Reklam web sayfasının bilgisayardaki ekran görüntüsü" priority={true} />
              </SwiperSlide>
              <SwiperSlide className="relative overflow-hidden h-[17.5rem] md:h-96 w-full rounded-b-lg border-t-0">
                <Img src="/images/frekanskurs-desktop.png" alt="Frekans Kurs web sayfasının ekran görüntüsü" />
              </SwiperSlide>
              <SwiperSlide className="relative overflow-hidden h-[17.5rem] md:h-96 w-full rounded-b-lg border-t-0">
                <Img src="/images/akinciyapi-desktop.png" alt="Akıncı Yapı ve Sineklikleri A.Ş. web sayfasının ekran görüntüsü" />
              </SwiperSlide>
            </Swiper>
            <div className="absolute top-16 -right-6 z-10">
              <div className="h-5 w-0.5 rounded-l-sm bg-gray-300 dark:bg-gray-700 absolute -left-0.2 top-14"></div>
              <div className="h-6 w-0.5 rounded-l-sm bg-gray-300 dark:bg-gray-700 absolute -left-0.2 top-24"></div>
              <div className="h-6 w-0.5 rounded-l-sm bg-gray-300 dark:bg-gray-700 absolute -left-0.2 top-36"></div>
            <Swiper modules={[Controller]} onSwiper={setSecondSwiper} controller={{ control: firstSwiper }} grabCursor={true} loop effect="creative" creativeEffect={{ "prev": { "shadow": true, "translate": [0, 0, -400] }, "next": { "translate": ["100%", 0, 0] } }}
               className="h-[19.2rem] w-40 md:h-96 md:w-48 bg-gray-300 dark:bg-gray-700 rounded-3xl md:rounded-4xl shadow-xl p-0.5 md:p-[3px] overflow-hidden">
                <div className="w-12 h-2 md:w-16 md:h-2.5 bg-black top-1.5 md:top-2 absolute z-10 left-1/2 rounded-b-2xl transform -translate-x-1/2"></div>
                <div className="h-full inset-0 w-full border-black border-[6px] md:border-[9px] rounded-3xl md:rounded-4xl absolute z-10"></div>
                <div className="h-full inset-0 w-full border-gray-300 dark:border-gray-700 border-2  rounded-3xl md:rounded-4xl absolute z-10"></div>
                <div className="z-10 absolute top-1 md:top-2 inset-x-2 flex items-center justify-between text-[8px] md:text-[10px] text-gray-700 py-0.5 md:py-1 px-2.5 md:px-4">
                  <p>{dayTime}</p>
                  <div className="flex space-x-0.5">
                    <Icon icon="chartBar" className="h-2" />
                    <Icon icon="wifi" className="h-2" />
                    <Icon icon="battery" className="h-2" />
                  </div>
                </div>
                  
                  <SwiperSlide tag="a" href="https://www.vahacreative.com" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url('/images/vahacreative-mobile.png')` }} className="relative p-2 h-full w-full rounded-2xl md:rounded-3xl bg-white bg-center bg-cover" aria-label="">
                    
                  </SwiperSlide>
                  <SwiperSlide tag="a" href="https://www.frekanskurs.com" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url('/images/frekanskurs-mobile.png')` }} className="relative p-2 h-full w-full rounded-2xl md:rounded-3xl bg-white bg-center bg-cover" aria-label="">
                  
                  </SwiperSlide>
                  <SwiperSlide tag="a" href="https://www.akinciyapi.com" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url('/images/akinciyapi-mobile.png')` }} className="relative p-2 h-full w-full rounded-2xl md:rounded-3xl bg-white bg-center bg-cover" aria-label="">
                    
                  </SwiperSlide>
                
              </Swiper>
            </div>
        </motion.div>
      </FlexBox>
    </MainLayout>
  )
}

export default withTransition(Home)
