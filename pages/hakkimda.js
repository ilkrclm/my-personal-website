import withTransition from "@/utils/withTransition"
import dynamic from 'next/dynamic';
const MainLayout = dynamic(() => import('@/components/MainLayout'))
import { useTheme } from "next-themes"
import Image from 'next/image';
import Wrapper from "@/components/ui/Wrapper"
import H1 from "@/components/tags/H1"
import P from "@/components/tags/P"
import Icon from "@/components/elements/Icon"
import H2 from "@/components/tags/H2"
import Img from "@/components/elements/Img"
import TechItem from "@/components/ui/TechItem"
import JobItem from "@/components/ui/JobItem"
import Stack from "@/components/ui/Stack";
import {useRouter} from 'next/router';
import tr from "@/locales/tr";
import en from "@/locales/en";

const AboutPage = () => {
  const router = useRouter()
  const { locales, locale: activeLocale } = router

  const t = activeLocale === 'tr' ? tr : en;

  const {theme, setTheme} = useTheme()
  return (
    <MainLayout image={theme === 'dark' ? "/images/home-bg-dark.png" : "/images/home-bg.png"}>
      
      <div className="flex flex-col md:flex-row md:space-x-16 m-auto pb-8 lg:p-8 w-full ">

        <div className="relative flex-shrink-0 md:max-w-[280px] overflow-hidden w-full flex flex-wrap md:flex-nowrap md:flex-col md:items-center md:text-center p-3  md:p-5 bg-white/5 dark:bg-gray-900/10 backdrop-blur-md rounded-3xl">
          <div className={`absolute bottom-0 inset-x-0 bg-gradient-to-r h-2 w-full ${theme === 'dark' ? "  from-indigo-400 via-purple-500 to-indigo-800" : "from-green-300 via-teal-400 to-blue-400"}`} aria-hidden="true"></div>
          <div className="h-32 md:h-52 w-5/12 md:w-full relative flex-shrink-0 rounded-4xl overflow-hidden shadow-md">
            <Image src={`/images/profile.png`} layout="fill" objectFit="cover" objectPosition={`top`} />
          </div>
          <div className="pl-4 md:pl-0 flex flex-col w-7/12 md:w-full">
            <h2 className="text-2xl md:text-3xl mt-2 font-bold text-gray-700 dark:text-gray-100">İlker Çalım</h2>
            <p className="text-sm md:text-base mt-2 text-gray-600 dark:text-gray-300 font-medium">{t.about_subtext}</p>
          </div>
          
          <div className="flex justify-between mx-auto mt-8 max-w-[240px] md:max-w-none w-full px-4">
            <div className="flex flex-col space-y-0.5 font-bold text-sm">
              <span className="font-bold text-gray-600 dark:text-gray-400">{t.about_designed}</span>
              <span >12</span>
            </div>
            <div className="flex flex-col space-y-0.5 font-bold text-sm">
              <span className="font-bold text-gray-600 dark:text-gray-400">{t.about_developed}</span>
              <span >16</span>
            </div>
          </div>

          <div className="mt-8 mb-2 mx-auto flex space-x-2.5 px-4">
            <a href="" target="_blank" rel="noopener norefferer" aria-label="" className="flex items-center justify-center h-11 w-11 rounded-full text-gray-600 dark:text-gray-200 bg-white/20 dark:bg-gray-900/20 shadow">
              <Icon icon="twitter" className="h-6 w-6" />
            </a>
            <a href="" target="_blank" rel="noopener norefferer" aria-label="" className="flex items-center justify-center h-11 w-11 rounded-full text-gray-600 dark:text-gray-200 bg-white/20 dark:bg-gray-900/20 shadow">
              <Icon icon="instagram" className="h-6 w-6" />
            </a>
            <a href="" target="_blank" rel="noopener norefferer" aria-label="" className="flex items-center justify-center h-11 w-11 rounded-full text-gray-600 dark:text-gray-200 bg-white/20 dark:bg-gray-900/20 shadow">
              <Icon icon="dribbble" className="h-6 w-6" />
            </a>
            <a href="" target="_blank" rel="noopener norefferer" aria-label="" className="flex items-center justify-center h-11 w-11 rounded-full text-gray-600 dark:text-gray-200 bg-white/20 dark:bg-gray-900/20 shadow">
              <Icon icon="github" className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 flex flex-col w-full">
          <h1 className="text-3xl md:text-4xl font-bold uppercase">{t.about_title}</h1>
          <p className="text-base md:text-lg mt-2 font-medium text-gray-700 dark:text-gray-200">{t.about_description}</p>
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-8 w-full mt-6">
            <div className="flex flex-col md:w-1/2">
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
            <div className="flex flex-col md:w-1/2">
              <h3 className="font-bold text-gray-600 dark:text-gray-300">{t.about_qualifications}</h3>
              <div className="mt-4 flex-wrap">
                <Stack image="/images/html.jpg" percent="100%" text="Html" />
                <Stack image="/images/css.png" percent="100%" text="Css" />
                <Stack image="/images/tailwindcss.png" percent="100%" text="TailwindCss" />
                <Stack image="/images/javascript.png" percent="80%" text="JavaScript" />
                <Stack image="/images/nextjs.png" percent="90%" text="Next JS" />
                <Stack image="/images/strapi.png" percent="75%" text="Strapi" />
                <Stack image="/images/alpinejs.png" percent="75%" text="Alpine JS" />
                <Stack image="/images/graphql.png" percent="65%" text="Graphql" />
                <Stack image="/images/nuxtjs.png" percent="45%" text="Nuxt JS" />
                <Stack image="/images/vuejs.png" percent="45%" text="Vue JS" />
                <Stack image="/images/mongodb.png" percent="40%" text="Mongo DB" />
                <Stack image="/images/firebase.png" percent="50%" text="Firebase" />
                <Stack image="/images/github.png" percent="70%" text="Github" />
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* <Wrapper direction="row" className="w-full item-center space-x-2 bg-white px-4 pb-2 bg-opacity-10 pt-16 shadow-md"> 
        <Icon icon="user" className="h-9 w-9 " />
        <H1 className="font-medium text-3xl">Hakkımda</H1>
      </Wrapper>
      <Wrapper direction="col" className="w-full overflow-y-auto scrollbar-hide">
        <Wrapper direction="col" className="w-full p-4 bg-gray-900 bg-opacity-10 "> 
          <P className="opacity-80 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum maxime quod iure sunt dolores expedita placeat id neque corporis!</P>
          <JobItem title={"Vaha Creative Dijital Ajans ve Reklam"} dates={"2021 - Şimdi"} />
          <JobItem title={"The Fabrika Dijital Ajans"} dates={"2020 - 2021"} />
          <JobItem title={"Turkcell Global Bilgi A.Ş. / T.C. Dışişleri"} dates={"2012 - 2018"} />
        </Wrapper>
        <Wrapper direction="row" className="w-full item-center space-x-2  bg-white px-4 py-2 bg-opacity-10 shadow-md"> 
          <Icon icon="user" className="h-7 w-7 " />
          <H2 className="font-semibold text-xl">Öğrendiğim Teknolojiler</H2>
        </Wrapper>
        <Wrapper direction="col" className="w-full p-4 bg-gray-900 bg-opacity-10"> 
          <h3 className="font-semibold">Frontend Kütüphane ve Frameworkler</h3>
          <Wrapper direction="col" className="space-y-6">
            <TechItem img={'/images/nextjs.png'} title="React JS / Next JS" percent={11} />
            <TechItem img={'/images/tailwindcss.png'} title="Tailwind Css" percent={11} />
            <TechItem img={'/images/nuxtjs.png'} title="Vue JS / Nuxt JS" percent={11} />
            <TechItem img={'/images/alpinejs.png'} title="Alpine JS" percent={11} />
          </Wrapper>
          
          
        </Wrapper>
      </Wrapper> */}
    </MainLayout>
  )
}

export default AboutPage
