import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import Button from '@/components/Button'
import List from '@/components/List'
import Title from '@/components/Title'
import WrapContainer from '@/components/WrapContainer'

import Years from '../Years'

export default function AboutUs() {
  const { t } = useTranslation('common')

  const listItem = [
    { title: 'unubertroffene qualitat' },
    { title: 'berufsausrustung' },
    { title: 'original produkte' },
  ]

  return (
    <div className="relative py-20 overflow-hidden md:py-32 xl:py-44 shadow-card bg-wood">
      <WrapContainer>
        <div className="row">
          <div className="space-y-10 md:col-6">
            <Title title={t('uber uns')} desc={t('startase uber uns desc')} />
            <div className="flex items-center py-2 pl-5 space-x-2 bg-white shadow-card">
              <span className="pl-2 font-sans text-2xl font-bold border-l-4 text-brown-600 border-brown-600">
                <Years />
              </span>
              <p className="font-sans text-2xl font-bold text-gray-900">{t('jahrige erfahrung')}</p>
            </div>
            <ul className="pb-10 space-y-3">
              {listItem.map((item, index) => {
                return <List key={index}>{t(item.title)}</List>
              })}
            </ul>
            <Button href="/about">{t('mehr info')}</Button>
          </div>
          <div className="mt-20 md:col-6 md:mt-0">
            <div className="inline-flex p-2 bg-white shadow-card">
              <div>
                <Image
                  src="/images/index-1.jpg"
                  alt="Working with wood"
                  width={450}
                  height={460}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </WrapContainer>
    </div>
  )
}
