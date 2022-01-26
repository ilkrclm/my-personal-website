import dynamic from 'next/dynamic';
import withTransition from "@/utils/withTransition"
const MainLayout = dynamic(() => import('@/components/MainLayout'))
import { useTheme } from "next-themes"
import Icon from "@/components/elements/Icon"
import { useRouter } from 'next/router';
import tr from '@/locales/tr';
import en from '@/locales/en';
import { useForm  } from 'react-hook-form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect, useState } from 'react';

const ContactPage = () => {

  const router = useRouter()
  const { locales, locale: activeLocale } = router

  const t = activeLocale === 'tr' ? tr : en;

  const {theme, setTheme} = useTheme()

   const { control, register, handleSubmit, formState: { errors }, reset } = useForm({})

  const customId = 'custom-id';
  const customId2 = 'custom-id-2';
  const customId3 = 'custom-id-3';
  const customId4 = 'custom-id-4';

  if (errors && errors.ad) {
    toast.error(errors.ad.message, {
          toastId: customId,
          position: "bottom-center",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
     })
    
  }
  if (errors && errors.soyad) {
    toast.error(errors.soyad.message, {
          toastId: customId2,
          position: "bottom-center",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
  }
  if (errors && errors.mesaj) {
    toast.error(errors.mesaj.message, {
          toastId: customId3,
          position: "bottom-center",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
  }
  if (errors && errors.eposta) {
    toast.error(errors.eposta.message, {
          toastId: customId4,
          position: "bottom-center",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
  }

  async function onSubmitForm({ ad, soyad, eposta, mesaj }, e) {
    e.preventDefault();
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        ad,
        soyad,
        eposta,
        mesaj,
      },
    }

      try {
      const response = await axios(config)
      if (response.status == 200) {
        reset()
        toast.success(t.form_success, {
          position: "bottom-center",
          autoClose: 7000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

   function bgImage() {

    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return theme === 'dark' ? "/images/home-bg-dark.png" : "/images/home-bg.png"
  
  }

  return (
    <MainLayout image={bgImage()} path={activeLocale === 'en' ? '/en/iletisim' : '/iletisim'} baslik={t.contact_title} description={t.contact_description} lang={activeLocale === 'tr' ? 'tr_TR' : 'en_US'}>
      <div className="relative flex flex-col md:flex-row md:space-x-12 pb-16 md:p-16 w-full h-full">
        <div className="flex flex-col mt-8 md:mt-0 md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold uppercase">{t.contact_title}</h1>
          <p className="md:text-lg mt-2 font-medium text-gray-700 dark:text-gray-200">{t.contact_description}</p> 
          <h2 className="first-letter:text-xl font-semibold mt-12">{t.contact_subtitle}</h2>
          <div className="flex flex-col space-y-4 mt-4">
            <a href="mailto:hi@ilkercalim.com" className={`overflow-hidden relative rounded-2xl inline-flex mr-auto flex-col p-3 pt-2 md:pt-3 md:p-4 space-y-1 shadow bg-white/10 dark:bg-gray-900/20`}>
              <span className={`absolute inset-x-0 bottom-0 h-1 rounded-2xl bg-gradient-to-r ${theme === 'dark' ? "  from-indigo-400 via-purple-500 to-indigo-800" : "from-green-300 via-teal-400 to-blue-400"}`}></span>
              <span className={`relative rounded-xl inline-block mr-auto text-gray-700 dark:text-gray-300`}><Icon icon="email" className="h-8 w-8"/></span>
              <span className="relative text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">hi@ilkercalim.com</span>
            </a>
            <div href="/" className={`overflow-hidden relative rounded-2xl inline-flex mr-auto flex-col p-3 pt-2 md:pt-3 md:p-4 space-y-1 shadow bg-white/10 dark:bg-gray-900/20`}>
              <span className={`absolute inset-x-0 bottom-0 h-1 rounded-2xl bg-gradient-to-r ${theme === 'dark' ? "  from-indigo-400 via-purple-500 to-indigo-800" : "from-green-300 via-teal-400 to-blue-400"}`}></span>
              <span className="relative text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">{t.contact_follow}</span>
              <div className="flex space-x-4">
                <a href="" className={`relative rounded-xl inline-block mr-auto text-gray-700 dark:text-gray-300`}><Icon icon="twitter" className="h-8 w-8" /></a>
                <a href="" className={`relative rounded-xl inline-block mr-auto text-gray-700 dark:text-gray-300`}><Icon icon="instagram" className="h-8 w-8" /></a>
                <a href="" className={`relative rounded-xl inline-block mr-auto text-gray-700 dark:text-gray-300`}><Icon icon="dribbble" className="h-8 w-8" /></a>
                <a href="" className={`relative rounded-xl inline-block mr-auto text-gray-700 dark:text-gray-300`}><Icon icon="github" className="h-8 w-8" /></a>
              </div>
            </div>
            
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmitForm)} className="mt-8 md:mt-0 relative bg-white/10 dark:bg-gray-900/20 shadow-lg overflow-hidden  rounded-2xl p-4 md:w-1/2">
          <div className={`absolute bottom-0 inset-x-0 bg-gradient-to-r h-2 w-full ${theme === 'dark' ? "  from-indigo-400 via-purple-500 to-indigo-800" : "from-green-300 via-teal-400 to-blue-400"}`} aria-hidden="true"></div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="ad">
                {t.contact_form_name}
              </label>
              <input className={`appearance-none bg-black/5 dark:bg-white/5 shadow-inner dark:bg-gray-900/20 block w-full text-gray-800 dark:text-gray-100  rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none font-medium placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring ring-green-300 dark:ring-indigo-300 border ${errors.ad ? ' border-red-500' : ' !border-transparent' }`} id="ad" name="ad" type="text" {...register('ad', { required: { value: true, message: t.form_name_error } })} placeholder={t.contact_form_name_placeholder} />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="soyad">
                {t.contact_form_surname}
              </label>
              <input className={`appearance-none bg-black/5 dark:bg-white/5 shadow-inner dark:bg-gray-900/20 block w-full text-gray-800 dark:text-gray-100 rounded-xl py-3 px-4 leading-tight focus:outline-none font-medium placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring ring-green-300 dark:ring-indigo-300 border ${errors.soyad ? ' border-red-500' : ' !border-transparent' }`} id="soyad" name="soyad" type="text" {...register('soyad', { required: { value: true, message: t.form_surname_error } })} placeholder={t.contact_form_surname_placeholder} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="eposta">
                {t.contact_form_email}
              </label>
              <input className={`appearance-none bg-black/5 dark:bg-white/5 shadow-inner dark:bg-gray-900/20 block w-full text-gray-800 dark:text-gray-100 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none font-medium placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring ring-green-300 dark:ring-indigo-300 border ${errors.eposta ? ' border-red-500' : ' !border-transparent' }`} id="eposta" name="eposta" {...register('eposta', { required: { value: true, message: t.form_noemail_error }, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: t.form_validemail_error } })} type="email" placeholder={t.contact_form_email_placeholder} />
            </div>
          </div>
            
            <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2" htmlFor="mesaj">
                {t.contact_form_message}
              </label>
              <textarea rows="5" className={`appearance-none bg-black/5 dark:bg-white/5 shadow-inner dark:bg-gray-900/20 block w-full text-gray-800 dark:text-gray-100 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none font-medium placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring ring-green-300 dark:ring-indigo-300 border ${errors.mesaj ? ' border-red-500' : ' !border-transparent' }`} type="text" name="mesaj" id="mesaj" {...register('mesaj', { required: { value: true, message: t.form } })} placeholder={t.contact_form_message_placeholder}>
                
              </textarea>
            </div>
            <div className="flex justify-between w-full mt-4 px-3">
              <button className=" py-2 pl-4 pr-3 inline-flex whitespace-nowrap space-x-2 px-4 items-center font-semibold bg-white dark:bg-gray-900 rounded-full shadow-lg bg-opacity-10 hover:bg-opacity-20 dark:bg-opacity-30 hover:dark:bg-opacity-50" type="submit">
                <span>{t.contact_form_button}</span>
                <Icon icon="send" className="h-6 w-6" />
              </button>
            </div>
              
          </div>
            
        </form>
      </div>
      <ToastContainer position="bottom-center" autoClose={7000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss pauseOnHover />
    </MainLayout>
  )
}

export default withTransition(ContactPage)