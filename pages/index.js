import MainLayout from '@/components/MainLayout'
import ButtonLink from '@/components/elements/ButtonLink'
import Icon from '@/components/elements/Icon'
import IconLink from '@/components/elements/IconLink'
import FlexBox from '@/components/ui/FlexBox'
import Img from '@/components/elements/Img'
import ImgWrapper from '@/components/ui/ImgWrapper'
import Text from '@/components/elements/Text'
import Wrapper from '@/components/ui/Wrapper'
import Btn from '@/components/elements/Btn'
import { useTheme } from 'next-themes'
import withTransition from '@/utils/withTransition'
import H1 from '@/components/elements/H1'
import H2 from '@/components/elements/P'

const Home = () => {
  const {theme, setTheme} = useTheme()
  return (
    <MainLayout image={theme === 'dark' ? "/images/home-bg-dark.png" : "/images/home-bg.png"}>
        {/* <Btn className="absolute right-5 top-5">
           <Icon icon={"menu"} className="h-6 w-6" h={12} w={12} />
        </Btn>
        <Btn className="absolute left-8 top-8 text-lg font-medium ">
           TR
        </Btn> */}
        <ImgWrapper bg={theme === 'dark' ? " bg-gray-900" : " bg-white"}>
          {theme === 'dark' ? <Icon icon="logoDark" className=" h-16 w-16" /> : <Icon icon="logo" className="h-16 w-16" />}
          
        </ImgWrapper>
        <H1 className="font-semibold text-2xl mt-2">İlker Çalım</H1>
        <H2 className="opacity-50 mt-1 font-medium">Sayfam Yapım Aşamasındadır... </H2>
      
        {/* <Wrapper direction="col" className="mt-12 sm:mt-20 max-w-max h-full">
          <ButtonLink href="/about">
            <Icon icon={"user"} className="h-6 w-6" />
            <Text as="span" text="Hakkımda" />
          </ButtonLink>
          <ButtonLink href="/portfolio">
            <Icon icon={"work"} className="h-6 w-6" />
            <Text as="span" text="Portfolyo" />
          </ButtonLink>
          <ButtonLink href="/contact">
            <Icon icon={"phone"} className="h-6 w-6" />
            <Text as="span" text="İletişim" />
          </ButtonLink>
          <ButtonLink href="/about" mt={'auto sm:mt-32'} pl={3} pr={1}>
            <Text as="span" text="Mesaj Gönder" />
            <Icon icon={"send"} className="h-6 w-6" />
          </ButtonLink>
        </Wrapper>
        <Wrapper direction="row" className="space-x-3 items-center justify-center my-5">
          <IconLink icon={"twitter"} />
          <IconLink icon={"instagram"} />
          <IconLink icon={"dribbble"} />
        </Wrapper> */}
    </MainLayout>
  )
}

export default withTransition(Home)