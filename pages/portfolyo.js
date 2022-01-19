import dynamic from 'next/dynamic';
const MainLayout = dynamic(() => import('@/components/MainLayout'))
import PopOut from '@/components/motions/PopOut'
import ButtonLink from '@/components/elements/ButtonLink'
import Text from '@/components/elements/Text'
import FlexBox from '@/components/ui/FlexBox'
import Wrapper from '@/components/ui/Wrapper'
import withTransition from '@/utils/withTransition'
import { useTheme } from 'next-themes'
import H2 from '@/components/tags/P'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Controller, A11y, Navigation, Autoplay} from 'swiper';
import { useState } from 'react'
import tr from '@/locales/tr';
import en from '@/locales/en';
import { useRouter } from 'next/router';
// install Swiper modules
SwiperCore.use([Controller, A11y, Navigation, Autoplay]);

const PortfolioPage = () => {

  const router = useRouter()
  const { locales, locale: activeLocale } = router

  const t = activeLocale === 'tr' ? tr : en;

  const { theme, setTheme } = useTheme()
  
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <MainLayout image={theme === 'dark' ? "/images/home-bg-dark.png" : "/images/home-bg.png"}>
      <div className="relative flex flex-col md:p-16 w-full h-full min-h-[inherit] overflow-y-clip">
        <h1 className="mt-8 md:mt-0 text-3xl md:text-4xl font-bold uppercase">{t.portfolio_title}</h1>
        <p className="md:text-lg mt-2 max-w-md font-medium text-gray-700 dark:text-gray-200">{t.portfolio_description}</p> 
        <div className="md:mt-4 flex space-x-4">
          <PopOut delay={3.4}>
            <ButtonLink href="/about">
              <Text as="span" text={`${t.portfolio_button1} ➔`} />
            </ButtonLink>
          </PopOut>
          <PopOut delay={3.5}>
            <ButtonLink href="/about">
              <Text as="span" text={t.portfolio_button2} />
            </ButtonLink>
          </PopOut>
        </div>
        <div className="mt-4 md:mt-8 inline-flex space-x-4">
          <div className="rounded-2xl flex flex-col p-3 md:p-4 space-y-1 bg-white/10 dark:bg-gray-900/20 shadow">
            <span className={`text-3xl md:text-4xl text-transparent bg-clip-text font-bold bg-gradient-to-r ${theme === 'dark' ? "  from-indigo-400 via-purple-500 to-indigo-800" : "from-green-300 via-teal-400 to-blue-400"}`}>10+</span>
            <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">{t.portfolio_info1}</span>
          </div>
          <div className="rounded-2xl flex flex-col p-3 md:p-4 space-y-1 bg-white/10 dark:bg-gray-900/20 shadow">
            <span className={`text-3xl md:text-4xl text-transparent bg-clip-text font-bold bg-gradient-to-r ${theme === 'dark' ? "  from-indigo-400 via-purple-500 to-indigo-800" : "from-green-300 via-teal-400 to-blue-400"}`}>10+</span>
            <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">{t.portfolio_info2}</span>
          </div>
        </div>
        <div className="absolute -bottom-6 md:-bottom-20 -right-40 md:-right-64 max-w-2xl md:max-w-6xl transform rotate-[-33deg]">
          <Swiper id="portfolio-slider1" modules={[Controller]} controller={{ control: secondSwiper }} onSwiper={setFirstSwiper} slidesPerView={3} spaceBetween={32} loop speed={20000} autoplay={{ delay: 0 }} className="w-full overflow-hidden">
              <SwiperSlide className="relative flex items-center justify-center overflow-hidden h-32 md:h-50 rounded-2xl bg-white ">Slide 1</SwiperSlide>
              <SwiperSlide className="relative flex items-center justify-center overflow-hidden h-32 md:h-50 rounded-2xl bg-white ">Slide 2</SwiperSlide>
              <SwiperSlide className="relative flex items-center justify-center overflow-hidden h-32 md:h-50 rounded-2xl bg-white ">Slide 3</SwiperSlide>
              <SwiperSlide className="relative flex items-center justify-center overflow-hidden h-32 md:h-50 rounded-2xl bg-white ">Slide 4</SwiperSlide>
          </Swiper>
          <Swiper id="portfolio-slider2" modules={[Controller]} onSwiper={setSecondSwiper} controller={{ control: firstSwiper }} slidesPerView={2} spaceBetween={32} loop speed={20000} autoplay={{ delay: 0 }} className="mt-8 w-[66%] mx-auto overflow-hidden">
              <SwiperSlide className="relative flex items-center justify-center overflow-hidden h-32 md:h-50 rounded-2xl bg-white ">Slide 1</SwiperSlide>
              <SwiperSlide className="relative flex items-center justify-center overflow-hidden h-32 md:h-50 rounded-2xl bg-white ">Slide 2</SwiperSlide>
              <SwiperSlide className="relative flex items-center justify-center overflow-hidden h-32 md:h-50 rounded-2xl bg-white ">Slide 3</SwiperSlide>
              <SwiperSlide className="relative flex items-center justify-center overflow-hidden h-32 md:h-50 rounded-2xl bg-white ">Slide 4</SwiperSlide>
          </Swiper>
          
        </div>
      </div>
      {/* <Wrapper direction="row" className="w-full item-center space-x-2 bg-white px-4 pb-2 bg-opacity-10 pt-16 shadow-md"> 
        <Icon icon="work" className="h-9 w-9 " />
        <H1 className="font-medium text-3xl">Portfolyo</H1>
      </Wrapper>
      <Wrapper direction="col" className="w-full overflow-y-auto scrollbar-hide">
        <Wrapper direction="col" className="w-full p-4 ">
          <P className="dark:text-gray-100  mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum maxime quod iure sunt dolores expedita placeat id neque corporis!</P>
          <Wrapper direction="row" className="space-x-4 mt-4 p-4 rounded-2xl bg-white dark:bg-gray-900 bg-opacity-20 dark:bg-opacity-20 shadow dark:shadow-inner">
            <div className="relative flex-shrink-0 h-12 w-12 rounded-xl overflow-hidden ">
              <Img src="/images/javascript.png" />
            </div>
            <Wrapper direction="col" className="space-y-1 w-full">
              <H2 className="font-semibold">Frekans Özel Öğretim Kursu</H2>
              <P className="dark:text-gray-300 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed id diam ut nulla.</P>
            </Wrapper>
            <button className="inline-block flex-shrink-0 my-auto">
             <Icon icon="send" className="opacity-70 h-7 w-7 my-auto" />
            </button>
          </Wrapper>
        </Wrapper>
      </Wrapper> */}
    </MainLayout>
  )
}

export default PortfolioPage