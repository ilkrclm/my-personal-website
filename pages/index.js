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
  const {theme, setTheme} = useTheme()


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
  const slideItem = {
    visible: { x: 0, },
    hidden: { x: '100%',  },
  }

  return (
    <MainLayout image={theme === 'dark' ? "/images/home-bg-dark.png" : "/images/home-bg.png"}>
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
            <H1 className="text-3xl font-bold tracking-tight leading-9">{t.home_title1} <br />{t.home_title2} <br /> {t.home_title3}</H1>
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
                <motion.span variants={item} className="px-2">#Firebase</motion.span>
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
              <ButtonLink href="/about">
                <Text as="span" text={`${t.home_button1} ➔`} />
              </ButtonLink>
            </PopOut>
            <PopOut delay={3.5}>
              <ButtonLink href="/about">
                <Text as="span" text={`${t.home_button2} ↓`} />
              </ButtonLink>
            </PopOut>
          </FlexBox>
        </FlexBox>
        <motion.div initial="hidden" animate="visible" variants={slideList} className="ml-auto mt-12 md:mt-0 pb-16 md:pb-0 flex relative w-full md:w-1/2">
          <Swiper id="projects-slider" modules={[Controller]} controller={{ control: secondSwiper }} onSwiper={setFirstSwiper} effect="fade" slidesPerView={1} spaceBetween={50} loop autoplay={{ delay: 10000 }} className="flex pt-9 flex-col relative max-w-3xl w-full ml-auto -mr-4 md:-mr-16 shadow-lg overflow-hidden">
            <div className="absolute z-10 overflow-hidden top-0 w-full h-9 rounded-tl-lg bg-gray-100/30 dark:bg-gray-900/30 transition backdrop-blur-md flex overflow-hidden justify-start items-center space-x-1.5 px-2">
                <span className="relative w-3 h-3 rounded-full bg-red-500"></span>
                <span className="relative w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="relative w-3 h-3 rounded-full bg-lime-500"></span>
            </div>
              <SwiperSlide className="relative overflow-hidden h-72 md:h-96 w-full rounded-b-lg border-t-0">
                <Img src="/images/portfolio-bg.png" />
              </SwiperSlide>
              <SwiperSlide className="relative overflow-hidden h-72 md:h-96 w-full rounded-b-lg border-t-0">
                <Img src="/images/home-bg.png" />
              </SwiperSlide>
              <SwiperSlide className="relative overflow-hidden h-72 md:h-96 w-full rounded-b-lg border-t-0">
                <Img src="/images/home-bg-dark.png" />
              </SwiperSlide>
            </Swiper>
            <div className="absolute top-20 -right-6 z-10">
              <div className="h-5 w-0.5 rounded-l-sm bg-gray-300 dark:bg-gray-700 absolute -left-0.2 top-14"></div>
              <div className="h-6 w-0.5 rounded-l-sm bg-gray-300 dark:bg-gray-700 absolute -left-0.2 top-24"></div>
              <div className="h-6 w-0.5 rounded-l-sm bg-gray-300 dark:bg-gray-700 absolute -left-0.2 top-36"></div>
            <Swiper modules={[Controller]} onSwiper={setSecondSwiper} controller={{ control: firstSwiper }} grabCursor={true} loop effect="creative" creativeEffect={{ "prev": { "shadow": true, "translate": [0, 0, -400] }, "next": { "translate": ["100%", 0, 0] } }}
               className="h-72 w-40 md:h-96 md:w-48 bg-gray-300 dark:bg-gray-700 rounded-4xl shadow-xl p-0.5 md:p-[3px] overflow-hidden">
                <div className="w-12 h-2 md:w-16 md:h-2.5 bg-black top-1.5 md:top-2 absolute z-10 left-1/2 rounded-b-2xl transform -translate-x-1/2"></div>
                <div className="h-full inset-0 w-full border-black border-[6px] md:border-[9px] rounded-4xl absolute z-10"></div>
                <div className="h-full inset-0 w-full border-gray-300 dark:border-gray-700 border-2 rounded-4xl absolute z-10"></div>
                <div className="z-10 absolute top-2.5 inset-x-2 flex items-center justify-between text-[10px] text-white py-0.5 md:py-1 px-2.5 md:px-4">
                  <p>{dayTime}</p>
                  <div className="flex space-x-0.5">
                    <Icon icon="chartBar" className="h-2" />
                    <Icon icon="wifi" className="h-2" />
                    <Icon icon="battery" className="h-2" />
                  </div>
                </div>
                  
                  <SwiperSlide style={{ backgroundImage: `url('/images/portfolio-bg.png')` }} className="p-2 h-full w-full rounded-3xl bg-white bg-center bg-cover">
                  </SwiperSlide>
                  <SwiperSlide style={{ backgroundImage: `url('/images/home-bg.png')` }} className="p-2 h-full w-full rounded-3xl bg-white bg-center bg-cover">
                  </SwiperSlide>
                  <SwiperSlide style={{ backgroundImage: `url('/images/home-bg-dark.png')` }} className="p-2 h-full w-full rounded-3xl bg-white bg-center bg-cover">
                  </SwiperSlide>
                
              </Swiper>
            </div>
        </motion.div>
          {/* <FlexBox align="start" className="mt-8 pl-8 px-4 py-0.5 rounded-r-full bg-gray-600/10 shadow-inner text-gray-800" >
            <H2 className="text-lg font-bold uppercase">Hizmetler</H2>
          </FlexBox> */}
      </FlexBox>
        {/* <Btn className="absolute right-5 top-5">
           <Icon icon={"menu"} className="h-6 w-6" h={12} w={12} />
        </Btn>
        <Btn className="absolute left-8 top-8 text-lg font-medium ">
           TR
        </Btn> */}
      {/* <ImgWrapper className={`relative rounded-full bg-opacity-10 overflow-hidden h-24 w-24 mt-12 flex items-center justify-center flex-shrink-0 shadow-inner ${theme === 'dark' ? " bg-white" : " bg-gray-900"}`}>
        {theme === 'dark' ? <Icon icon="logoDark" className=" h-16 w-16 filter drop-shadow-md" /> : <Icon icon="logo" className="h-16 w-16 filter drop-shadow-md" />}
      </ImgWrapper> */}
      {/* <MotionText className="font-semibold text-2xl mt-2"><h1>İlker Çalım</h1></MotionText>
      <MotionText className="opacity-50 mt-1 font-medium" transition={{ delay: 1.1 }}><h2>Web Tasarım Uzmanı</h2></MotionText> */}
      
        {/* <Fade delay={1.5}>
          <ButtonLink href="/about">
            <Icon icon={"user"} className="h-6 w-6" />
            <Text as="span" text="Hakkımda" />
          </ButtonLink>
        </Fade>
        <Fade delay={1.7}>
          <ButtonLink href="/portfolio">
            <Icon icon={"work"} className="h-6 w-6" />
            <Text as="span" text="Portfolyo" />
          </ButtonLink>
        </Fade>
        <Fade delay={1.9}>
          <ButtonLink href="/contact">
            <Icon icon={"phone"} className="h-6 w-6" />
            <Text as="span" text="İletişim" />
          </ButtonLink>
        </Fade>
        <Fade delay={2.1} className="mt-auto sm:sm:mt-32">
          <ButtonLink href="/about" pl={3} pr={1}>
            <Text as="span" text="Mesaj Gönder" />
            <Icon icon={"send"} className="h-6 w-6" />
          </ButtonLink>
        </Fade>
      </Wrapper>
      <Wrapper direction="row" className="space-x-3 items-center justify-center my-5">
        <PopOut delay={2.2}>
          <IconLink icon={"twitter"} />
        </PopOut>
        <PopOut delay={2.3}>
          <IconLink icon={"instagram"} color="yellow-700" />
        </PopOut>
        <PopOut delay={2.4}>
          <IconLink icon={"dribbble"}  color="pink-600" />
        </PopOut> */}
    </MainLayout>
  )
}

export default Home