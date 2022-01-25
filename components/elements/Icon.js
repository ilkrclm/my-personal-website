import UserIcon from '@/components/icons/User.svg'
import PhoneIcon from '@/components/icons/Phone.svg'
import WorkIcon from '@/components/icons/Work.svg'
import SendIcon from '@/components/icons/Send.svg'
import TwitterIcon from '@/components/icons/twitter.svg'
import InstagramIcon from '@/components/icons/instagram.svg'
import DribbbleIcon from '@/components/icons/dribbble.svg'
import github from '@/components/icons/github.svg'
import MenuIcon from '@/components/icons/Menu.svg'
import LogoIcon from '@/components/icons/Logo.svg'
import LogoDarkIcon from '@/components/icons/LogoDark.svg'
import chartBar from '@/components/icons/chartBar.svg'
import wifi from '@/components/icons/wifi.svg'
import battery from '@/components/icons/battery.svg'
import email from '@/components/icons/email.svg'
import star from '@/components/icons/star.svg'


const ICONS = {
    chartBar,
    wifi,
    email,
    star,
    battery,
    github,
    user: UserIcon,
    phone: PhoneIcon,
    work: WorkIcon,
    send: SendIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    menu: MenuIcon,
    dribbble: DribbbleIcon,
    logo: LogoIcon,
    logoDark: LogoDarkIcon,
    
};

export default function Icon({ icon, ...props }) {
  const Icon = ICONS[icon]
  return (
    <Icon {...props} />
  )
}
