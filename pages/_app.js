import '../styles/globals.css'

import { Mulish, Roboto_Slab } from 'next/font/google'
import { DefaultSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

const mulish = Mulish({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mulish',
})

const roboto_slab = Roboto_Slab({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto_slab',
})
function MyApp({ Component, pageProps }) {
  const { t } = useTranslation('common')

  return (
    <>
      <DefaultSeo
        title="Lignum"
        description={t('app desc')}
        openGraph={{
          type: 'website',
          locale: '',
          url: 'https://lignumland.com/',
          site_name: 'Lignum',
          description:
            'Lignum Land ist ein Team von hochprofessionellen Handwerkern, die ihren Job mit großer Leidenschaft machen. Wir arbeiten auch mit den besten Designern der Branche zusammen und verfügen über die neueste Ausrüstung.',
          images: [
            {
              url: 'https://lignumland.com/images/og_image.jpg',
              alt: 'OG Image',
            },
          ],
        }}
      />
      <div className={`${mulish.variable} ${roboto_slab.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
