import MainLayout from '@/components/MainLayout'
import FlexBox from '@/components/ui/FlexBox'
import withTransition from '@/utils/withTransition'
import { useTheme } from 'next-themes'

const Portfolio = () => {
  const {theme, setTheme} = useTheme()
  return (
    <MainLayout image={theme === 'dark' ? "/images/home-bg-dark.png" : "/images/home-bg.png"}>
      
    </MainLayout>
  )
}

export default withTransition(Portfolio)