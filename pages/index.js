import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

const AboutUsIndex = dynamic(() => import('../components/sections/AboutUsIndex'), { ssr: false })
const CardBlue = dynamic(() => import('../components/sections/CardBlue'), { ssr: false })
const CardBrown = dynamic(() => import('../components/sections/CardBrown'), { ssr: false })
const HeaderSection = dynamic(() => import('../components/sections/HeaderSection'), { ssr: false })
const LatestProject = dynamic(() => import('../components/sections/LastestProject'), { ssr: false })
const OurServices = dynamic(() => import('../components/sections/OurServices'), { ssr: false })
const Layout = dynamic(() => import('../components/layout/Layout'), { ssr: false })
const ImageDescription = dynamic(() => import('../components/sections/ImageDescription'), {
  ssr: false,
})

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <NextSeo
        title="Lignum"
        openGraph={{
          title: 'Lignum',
        }}
      />
      <Layout title={t('home')}>
        {/* Header Section Example */}
        <HeaderSection />

        {/* Blue Cards */}
        <CardBlue />

        {/* About Section */}
        <AboutUsIndex />

        {/* Our Services */}
        <OurServices />

        {/* Brown Cards */}
        <CardBrown />

        {/* Latest Projects */}
        <LatestProject />

        {/* Image with description */}
        <ImageDescription
          title={t('holz biegen')}
          desc={t('wir verfugen uber professionelle maschinen')}
          src="index-12.jpg"
          items={[
            {
              src: 'icon-1',
              title: t('dampf erhitze'),
              desc: t('alles beginnt mit dem erhitzen des holzes mit heisem dampf'),
            },
            {
              src: 'icon-2',
              title: t('holzverarbeitung'),
              desc: t('wir biegen das erhitzte holz und machen es stark'),
            },
            {
              src: 'icon-3',
              title: t('holzarten'),
              desc: t('wir verwenden weiseiche roteiche ulme hickory esche usw'),
            },
            {
              src: 'icon-4',
              title: t('langlebige qualitat'),
              desc: t('unsere holzprodukte sind alterungsbestandig'),
            },
          ]}
        />
      </Layout>
    </>
  )
}
