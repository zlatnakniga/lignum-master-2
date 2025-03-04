import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import List from '@/components/List'
import Title from '@/components/Title'
import WrapContainer from '@/components/WrapContainer'

import { services } from '../../content/services'

export default function ServicesSection() {
  const { t } = useTranslation('services')

  return (
    <div className="relative py-20 md:py-32 bg-wood">
      <WrapContainer>
        <div className="space-y-28 md:space-y-32">
          {services.map((item, index) => {
            return index % 2 == 1 ? (
              <div key={index} id={item.id} className="row" style={{ scrollMarginTop: '130px' }}>
                <div className="order-2 mt-12 md:col-6 md:order-1 md:mt-0">
                  <div className="inline-flex p-2 bg-white shadow-card">
                    <div>
                      <Image
                        src={`/images/${item.src}`}
                        alt="Working"
                        width={450}
                        height={450}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="order-1 md:col-6 md:order-2">
                  <Title title={t(item.title)} desc={t(`desc_${index + 1}`)} className="pb-8" />
                  <ul className="mt-8 space-y-3">
                    {item.items.map((item, index) => (
                      <List key={index}>{t(item)}</List>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div key={index} id={item.id} className="row" style={{ scrollMarginTop: '130px' }}>
                <div className="md:col-6">
                  <Title title={t(item.title)} desc={t(`desc_${index + 1}`)} className="pb-8" />
                  <ul className="mt-8 space-y-3">
                    {item.items.map((item, index) => (
                      <List key={index}>{t(item)}</List>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:col-6 md:mt-0">
                  <div className="inline-flex p-2 bg-white shadow-card">
                    <div>
                      <Image
                        src={`/images/${item.src}`}
                        alt="Working"
                        width={450}
                        height={450}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </WrapContainer>
    </div>
  )
}
