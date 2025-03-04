import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'

import ContactSection from '@/components/sections/ContactSection'
import HeaderSectionSm from '@/components/sections/HeaderSectionSm'
import Layout from '@/layout/Layout'

export default function Contact() {
  const { t } = useTranslation('common')

  return (
    <>
      <NextSeo
        title="Lignum - Kontakt"
        openGraph={{
          title: 'Lignum - Kontakt',
        }}
      />
      <Layout title={t('contact')}>
        {/* Header  */}
        <HeaderSectionSm
          title={t('kontakt')}
          desc={t('haben sie noch andere holzprojekte im sinn')}
          src="h3"
        />
        {/* Contact Form */}
        <ContactSection />
      </Layout>
    </>
  )
}
