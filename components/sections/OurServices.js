import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import Button from '@/components/Button'
import Title from '@/components/Title'
import WrapContainer from '@/components/WrapContainer'

export default function OurServices() {
  const { t } = useTranslation('common')

  const service = [
    {
      id: 'professional_sleds',
      src: 'index-2.jpg',
      title: 'professionelle schlitten',
      desc: 'der davoser schlitten ist eines der bekanntesten schweizer symbole',
      button: t('mehr info'),
    },
    {
      id: 'bench_system',
      src: 'index-3.jpg',
      title: 'banksystem',
      desc: 'diese Holzbanke sind fur alle nutzungsarten geeignet',
      button: t('mehr info'),
    },
    {
      id: 'wainwrighting',
      src: 'index-4.jpg',
      title: 'schreinerei wagnerei',
      desc: 'wir können alle in der vergangenheit verwendeten schreinereiprodukte herstellen',
      button: t('mehr info'),
    },
  ]

  return (
    <div className="py-20 bg-gray-100 md:py-32">
      <WrapContainer>
        <div className="flex items-center">
          <Title
            title={t('unsere dienstleistungen')}
            desc={t('teilen sie uns mit was sie wollen und wir werden gemeinsam daran arbeiten')}
          />
          <div className="hidden md:block">
            <Button>
              <Link href="/services">{t('alle services')}</Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 space-y-10 md:space-y-0 row">
          {service.map((item, index) => {
            return (
              <Card
                key={index}
                src={item.src}
                title={t(item.title)}
                desc={t(item.desc)}
                id={item.id}
                button={item.button}
              />
            )
          })}
        </div>
      </WrapContainer>
    </div>
  )
}

const Card = ({ src, title, desc, id, button }) => {
  return (
    <div className="lg:flex justify-between md:col-4">
      <div className="p-3 text-center bg-white shadow-card">
        <div>
          <Image
            src={`/images/${src}`}
            alt="Working"
            width={370}
            height={250}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="py-2 space-y-4 lg:py-6">
          <p className="font-serif text-xl font-bold text-blue-900">{title}</p>
          <p className="pb-4 font-sans text-base font-normal text-blue-900">{desc}</p>
          <div className="">
            <Link passHref href={`/services/#${id}`}>
              <p className="font-sans font-bold text-blue-900 underline ">{button}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
