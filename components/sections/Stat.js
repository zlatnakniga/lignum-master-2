import useTranslation from 'next-translate/useTranslation'

import Years from '../Years'

export default function Stat() {
  const { t } = useTranslation('common')

  const years = Years()

  const cardDetail = [{}, {}, {}, {}]

  return (
    <div className="relative pb-24 overflow-hidden bg-gray-900 md:block md:bg-white">
      <div className="w-full h-full py-12 md:pt-24 md:relative md:pb-44 md:bg-gray-900 bg-wood">
        <div className="mx-auto lg:w-8/12">
          <p className="font-serif text-3xl font-bold text-center md:4xl xl:text-5xl text-brown-500">
            {t('stats_title')}
          </p>
        </div>
      </div>
      <div className="container relative md:-mt-24">
        <div className="row">
          <div className="md:mx-auto lg:col-10 xl:col-8">
            <div
              className="grid grid-cols-2 md:grid-cols-4 flex-gap-4 md:flex-gap-16"
              style={{ zIndex: '3' }}
            >
              {cardDetail.map((item, index) => {
                return (
                  <Card
                    key={index}
                    title={t(`stats_title${index + 1}`, { years }, { returnObjects: true })}
                    desc={t(`stats_desc${index + 1}`)}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Card = ({ title, desc }) => {
  return (
    <div className="bg-brown-500">
      <div className="px-2 py-8 text-center">
        <p className="font-serif text-2xl font-bold text-blue-900 md:text-5xl xl:text-6xl">
          {title}
        </p>
        <p className="font-sans text-lg font-bold text-blue-900"> {desc}</p>
      </div>
    </div>
  )
}
