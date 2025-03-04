import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import SVG from 'react-inlinesvg'

import ContactForm from '@/components/sections/ContactForm'
import Title from '@/components/Title'

import Years from '../Years'

export default function ContactSection() {
  const { t } = useTranslation('common')

  const years = Years()

  const [success, setSuccess] = useState(false)
  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true)
    }
  }, [])

  return (
    <div className="bg-gray-100">
      <div className="container md:py-24">
        <div className="row">
          <div className="mx-auto lg:col-11">
            <div className="flex flex-col items-stretch justify-center md:flex-row">
              <div className="-mx-4 lg:w-4/12 md:w-5/12 bg-brown-500 md:-mx-0">
                {success && <p style={{ color: 'green' }}>Successfully submitted form!</p>}
                <ContactForm />
              </div>
              <div className="z-10 px-2 pt-8 pb-16 -mx-4 space-y-12 bg-white md:px-10 xl:w-8/12 md:w-7/12 md:-mx-0 shadow-card">
                <Title
                  title={t('jahre erfahrung', { years }, { returnObjects: true })}
                  desc={t('senden sie uns eine e mail oder rufen')}
                  subtitle={t('in woodworking')}
                />
                <div className="grid lg:grid-cols-2 flex-gap-12">
                  <InfoCard
                    src="tel"
                    title={t('telefon', { years }, { returnObjects: true })}
                    item={[
                      { item: '+389 (0) 42 314 000', href: 'tel:+38942314000' },
                      { item: '+389 (0) 71 227 900', href: 'tel:+38971227900' },
                      { item: '+41 (0) 76 680 58 50', href: 'tel:+41 (0) 766805850' },
                    ]}
                  />
                  <InfoCard
                    src="mail"
                    title={t('e mail adresse')}
                    item={[{ item: 'info@lignumland.com', href: 'mailto:info@lignumland.com' }]}
                  />
                  <InfoCard
                    src="location"
                    title={t('standort')}
                    item={[
                      {
                        item: t('location'),
                        href: 'https://www.google.com/maps/@41.8697329,20.9324841,208m/data=!3m1!1e3',
                        target: true,
                      },
                    ]}
                  />
                  <InfoCard
                    src="time"
                    title={t('offnungszeiten')}
                    item={[
                      {
                        title: t('montag freitag'),
                        item: `8:00 - 12:00 und <br /> 13:00 - 17:00`,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a
          href="https://www.google.com/maps/@41.8697329,20.9324841,208m/data=!3m1!1e3"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/map.jpg"
            alt="Working with wood"
            width={2400}
            height={800}
            className="object-cover w-full h-full"
          />
        </a>
      </div>
    </div>
  )
}

const InfoCard = ({ src, title, item = [] }) => {
  return (
    <div>
      <div className="flex items-start">
        <SVG
          src={`/svg/icons/${src}.svg`}
          className="flex-shrink-0 w-auto pr-4 fill-current md:h-20 h-14 text-brown-500"
        />
        <div>
          <p className="mb-2 font-serif text-xl font-bold text-gray-900">{title}</p>
          <ul>
            {item.map((item, index) => {
              return (
                <li key={index} className="font-sans text-gray-900">
                  {item.title && <p className="font-bold text-gray-900 font-base">{item.title}</p>}
                  {item.target ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      dangerouslySetInnerHTML={{ __html: item.item }}
                      className="text-gray-900"
                    />
                  ) : (
                    <a
                      href={item.href}
                      dangerouslySetInnerHTML={{ __html: item.item }}
                      className="text-gray-900"
                    />
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
