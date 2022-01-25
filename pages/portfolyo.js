import dynamic from 'next/dynamic';
const MainLayout = dynamic(() => import('@/components/MainLayout'))
import PopOut from '@/components/motions/PopOut'
import ButtonLink from '@/components/elements/ButtonLink'
import Text from '@/components/elements/Text'
import withTransition from '@/utils/withTransition'
import { useTheme } from 'next-themes'
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Controller, A11y, Navigation, Autoplay} from 'swiper';
import { useState } from 'react'
import tr from '@/locales/tr';
import en from '@/locales/en';
import { useRouter } from 'next/router';
import Img from '@/components/elements/Img';
import Icon from '@/components/elements/Icon';
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
    <MainLayout image={theme === 'dark' ? "/images/home-bg-dark.png" : "/images/home-bg.png"} path={activeLocale === 'en' ? '/en/portfolyo' : '/portfolyo'} baslik={t.portfolio_title} description={t.portfolio_description.substring(0, 150)} lang={activeLocale === 'tr' ? 'tr_TR' : 'en_US'}>
      <div className="relative flex flex-col md:p-16 w-full h-full min-h-[inherit] overflow-y-clip">
        <h1 className="mt-8 md:mt-0 text-3xl md:text-4xl font-bold uppercase">{t.portfolio_title}</h1>
        <p className="md:text-lg mt-2 max-w-lg font-medium text-gray-700 dark:text-gray-200">{t.portfolio_description}</p> 
       
        <div className="mt-4 md:mt-8 inline-flex space-x-2 md:space-x-4">
          <div className="rounded-2xl flex flex-col p-3 md:p-4 space-y-1 bg-white/10 dark:bg-gray-900/20 shadow">
            <span className={`text-3xl md:text-4xl text-transparent bg-clip-text font-bold bg-gradient-to-r ${theme === 'dark' ? "  from-indigo-400 via-purple-500 to-indigo-800" : "from-green-300 via-teal-400 to-blue-400"}`}>10+</span>
            <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">{t.portfolio_info1}</span>
          </div>
          <div className="rounded-2xl flex flex-col p-3 md:p-4 space-y-1 bg-white/10 dark:bg-gray-900/20 shadow">
            <span className={`text-3xl md:text-4xl text-transparent bg-clip-text font-bold bg-gradient-to-r ${theme === 'dark' ? "  from-indigo-400 via-purple-500 to-indigo-800" : "from-green-300 via-teal-400 to-blue-400"}`}>15+</span>
            <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">{t.portfolio_info2}</span>
          </div>
        </div>
         <div className="md:mt-4 flex space-x-4">
          <PopOut delay={2}>
            <ButtonLink href={activeLocale === 'tr' ? '/hakkimda' : '/en/hakkimda'} >
              <Text as="span" text={`${t.portfolio_button1} ➔`} />
            </ButtonLink>
          </PopOut>
          {/* <PopOut delay={3.5}>
            <ButtonLink href="/about">
              <Text as="span" text={t.portfolio_button2} />
            </ButtonLink>
          </PopOut> */}
        </div>
        <div className="absolute -bottom-6 md:-bottom-20 -right-40 md:-right-64 max-w-2xl md:max-w-6xl transform rotate-[-33deg]">
          <Swiper id="portfolio-slider1" modules={[Controller]} controller={{ control: secondSwiper }} onSwiper={setFirstSwiper} slidesPerView={3} spaceBetween={32} loop speed={20000} autoplay={{ delay: 0 }} className="w-full overflow-hidden">
              <SwiperSlide tag="a" href="https://www.vahacreative.com" target="_blank" rel="noopener norefferer" className="relative overflow-hidden h-28 md:h-50 rounded-xl md:rounded-2xl bg-white"><Img src="/images/vaha-portfolyo.png" /></SwiperSlide>
              <SwiperSlide tag="a" href="https://www.frekanskurs.com" target="_blank" rel="noopener norefferer" className="relative overflow-hidden h-28 md:h-50 rounded-xl md:rounded-2xl bg-white"><Img src="/images/frekans-portfolyo.png" /></SwiperSlide>
              <SwiperSlide tag="a" href="https://www.akinciyapi.com" target="_blank" rel="noopener norefferer" className="relative overflow-hidden h-28 md:h-50 rounded-xl md:rounded-2xl bg-white"><Img src="/images/akinci-portfolyo.png" /></SwiperSlide>
              <SwiperSlide tag="a" href="/" className="relative overflow-hidden h-28 md:h-50 rounded-xl md:rounded-2xl bg-white"><Img src="/images/ilkerweb-portfolyo.png" /></SwiperSlide>
              <SwiperSlide className={`flex flex-col items-center justify-center bg-gradient-to-br text-3xl font-bold relative overflow-hidden h-28 md:h-50 rounded-xl md:rounded-2xl bg-white ${theme === 'dark' ? "  from-indigo-400 via-purple-500 to-indigo-800" : "from-green-300 via-teal-400 to-blue-400"}`}>
                <Icon icon="star" className="flex-shrink-0 h-7 w-7 md:h-10 md:w-10" />
                <span className="text-lg md:text-2xl font-bold mt-1">{t.portfolio_card}</span>
                <Link href={"/iletisim"} passHref>
                  <a className={`px-4 py-1 text-sm md:text-base mt-2 md:mt-4 inline-flex transition duration-300 whitespace-nowrap space-x-2 px-4 items-center font-semibold bg-white dark:bg-gray-900 rounded-full shadow-lg bg-opacity-10 hover:bg-opacity-20 dark:bg-opacity-30 hover:dark:bg-opacity-50`}>{t.portfolio_card_button}</a>
                </Link>
              </SwiperSlide>
          </Swiper>
          <Swiper id="portfolio-slider2" modules={[Controller]} onSwiper={setSecondSwiper} controller={{ control: firstSwiper }} slidesPerView={2} spaceBetween={32} loop speed={20000} autoplay={{ delay: 0 }} className="mt-8 w-[66%] mx-auto overflow-hidden">
              <SwiperSlide tag="a" href="/" className="relative overflow-hidden h-28 md:h-50 rounded-xl md:rounded-2xl bg-white"><Img src="/images/ilkerweb-portfolyo.png" /></SwiperSlide>
              <SwiperSlide className={`flex flex-col items-center justify-center bg-gradient-to-br text-3xl font-bold relative overflow-hidden h-28 md:h-50 rounded-xl md:rounded-2xl bg-white ${theme === 'dark' ? "  from-indigo-400 via-purple-500 to-indigo-800" : "from-green-300 via-teal-400 to-blue-400"}`}>
                <Icon icon="star" className="flex-shrink-0 h-7 w-7 md:h-10 md:w-10" />
                <span className="text-lg md:text-2xl font-bold mt-1">{t.portfolio_card}</span>
                <Link href={"/iletisim"} passHref>
                  <a className={`px-4 py-1 text-sm md:text-base mt-2 md:mt-4 inline-flex transition duration-300 whitespace-nowrap space-x-2 px-4 items-center font-semibold bg-white dark:bg-gray-900 rounded-full shadow-lg bg-opacity-10 hover:bg-opacity-20 dark:bg-opacity-30 hover:dark:bg-opacity-50`}>{t.portfolio_card_button}</a>
                </Link>
              </SwiperSlide>
              <SwiperSlide tag="a"  href="https://www.vahacreative.com" target="_blank" rel="noopener norefferer" className="relative overflow-hidden h-28 md:h-50 rounded-xl md:rounded-2xl bg-white"><Img src="/images/vaha-portfolyo.png" /></SwiperSlide>
              <SwiperSlide tag="a"  href="https://www.frekanskurs.com" target="_blank" rel="noopener norefferer" className="relative overflow-hidden h-28 md:h-50 rounded-xl md:rounded-2xl bg-white"><Img src="/images/frekans-portfolyo.png" /></SwiperSlide>
              <SwiperSlide tag="a"  href="https://www.akinciyapi.com" target="_blank" rel="noopener norefferer" className="relative overflow-hidden h-28 md:h-50 rounded-xl md:rounded-2xl bg-white"><Img src="/images/akinci-portfolyo.png" /></SwiperSlide>
          </Swiper>
          
        </div>
      </div>
    </MainLayout>
  )
}

export default withTransition(PortfolioPage)