import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

import HeaderSectionSm from '@/components/sections/HeaderSectionSm'
import ServicesSection from '@/components/sections/ServicesSection'
import Layout from '@/layout/Layout'

export default function Services() {
  const { t } = useTranslation('common')

  return (
    <>
      <NextSeo
        title="Lignum - Leistungen"
        openGraph={{
          title: 'Lignum - Leistungen',
        }}
      />
      <Layout title={t('services')}>
        {/* Header */}
        <HeaderSectionSm
          title={t('leistungen')}
          desc={t('wir haben bewiesen dass das biegen von holz zu einem kunstwerk werden kann')}
          src="h2"
        />
        {/* Services */}
        <ServicesSection />
      </Layout>
    </>
  )
}
