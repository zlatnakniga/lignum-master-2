import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

import About from '@/components/sections/AboutUs'
import HeaderSectionSm from '@/components/sections/HeaderSectionSm'
import ImageDescription from '@/components/sections/ImageDescription'
import OurTeam from '@/components/sections/OurTeam'
import Stat from '@/components/sections/Stat'
import Layout from '@/layout/Layout'

export default function about() {
  const { t } = useTranslation('common')

  return (
    <>
      <NextSeo
        title="Lignum - Über uns"
        openGraph={{
          title: 'Lignum - Über uns',
        }}
      />
      <Layout title={t('about us')}>
        {/* Header */}
        <HeaderSectionSm title={t('uber uns')} desc={t('header about desc')} src="h2" />
        {/* About */}
        <About />
        {/* Stat */}
        <Stat />
        {/* Our Team */}
        <OurTeam />
        {/* Offer */}
        <ImageDescription
          title={t('warum wurdest du uns wahlen')}
          desc={t('why_us_desc')}
          src="about-2.jpg"
          items={[
            {
              src: 'icon-5',
              title: t('kundenorientiert'),
              desc: t('fur uns ist die kundenzufriedenheit alles was uns am herzen liegt'),
            },
            {
              src: 'icon-2',
              title: t('innovative ideen'),
              desc: t('alles was wir tun muss ein kunstwerk sein'),
            },
            {
              src: 'icon-6',
              title: t('bezahlbare preise'),
              desc: t('unsere qualitatsprodukte uberschreiten nicht ihr budget'),
            },
            {
              src: 'icon-7',
              title: t('schnelle lieferung'),
              desc: t('wir verpflichten uns und liefern punktlich immer'),
            },
          ]}
        />
      </Layout>
    </>
  )
}
