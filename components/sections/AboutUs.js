import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import List from '@/components/List'
import Title from '@/components/Title'
import WrapContainer from '@/components/WrapContainer'

import Years from '../Years'

export default function About() {
  const { t } = useTranslation('common')
  const listItem = [
    { title: 'unubertroffene qualitat' },
    { title: 'berufsausrustung' },
    { title: 'original produkte' },
  ]
  const years = Years()

  return (
    <div className="relative py-20 overflow-hidden md:py-32 xl:py-44 shadow-card bg-wood">
      <WrapContainer>
        <div className="row">
          <div className="md:col-6">
            <Title
              title={t('uber uns')}
              desc={t('about us desc', { years }, { returnObjects: true })}
            />
            <ul className="mt-10 space-y-3">
              {listItem.map((item, index) => {
                return <List key={index}>{t(item.title)}</List>
              })}
            </ul>
          </div>
          <div className="mt-20 md:col-6 md:mt-0">
            <div className="inline-flex p-2 bg-white shadow-card">
              <div>
                <Image
                  src="/images/about-1.jpg"
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
