import UserIcon from '@/components/icons/User.svg'
import PhoneIcon from '@/components/icons/Phone.svg'
import WorkIcon from '@/components/icons/Work.svg'
import SendIcon from '@/components/icons/Send.svg'
import TwitterIcon from '@/components/icons/Twitter.svg'
import InstagramIcon from '@/components/icons/Instagram.svg'
import DribbbleIcon from '@/components/icons/Dribbble.svg'
import MenuIcon from '@/components/icons/Menu.svg'
import LogoIcon from '@/components/icons/Logo.svg'
import LogoDarkIcon from '@/components/icons/LogoDark.svg'


const ICONS = {
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
