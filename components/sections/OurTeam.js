import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import SVG from 'react-inlinesvg'

import Title from '@/components/Title'
import WrapContainer from '@/components/WrapContainer'

export default function OurTeam() {
  const { t } = useTranslation('common')

  return (
    <div className="w-full h-full py-12 bg-gray-100 md:py-24">
      <WrapContainer>
        <Title
          title={t('unser team')}
          desc={t('die vordenker hinter der erstaunlichen handwerkskunst')}
        />
        <div className="items-center pt-20 row">
          <div className="p-2 bg-white md:col-5 shadow-card">
            <div>
              <Image
                src="/images/profile-1.jpg"
                alt="Working"
                width={470}
                height={510}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:col-7">
            <div className="flex flex-col pt-8 md:flex-row md:items-end">
              <p className="font-serif text-3xl font-bold text-blue-900">
                {t('jeton xhaferi inhaber')}
              </p>
              <SVG src="/svg/line.svg" className="md:ml-3" />
            </div>
            <div className="flex items-stretch pt-8">
              <SVG
                src="/svg/quotes.svg"
                className="self-start flex-shrink-0 fill-current text-brown-500 w-11 h-11"
              />
              <ul className="pt-3 ml-6 space-y-6 list-disc md:space-y-0">
                <li className="font-sans text-base font-bold text-gray-900">
                  {t('zu beginn des jahres 2016 startete ein neues kapitel')}
                </li>
                <li className="font-sans text-base font-bold text-gray-900">
                  {t('besuchen sie uns in unserem hölzigen betrieb  wir freuen uns auf sie')}
                </li>
              </ul>
              <SVG
                src="/svg/quotes.svg"
                className="self-end flex-shrink-0 ml-2 -mb-3 transform rotate-180 fill-current text-brown-500 w-11 h-11"
              />
            </div>
          </div>
        </div>
      </WrapContainer>
      <div className="pt-20">
        <div>
          <Image
            src="/images/team.jpg"
            alt="Working"
            width={2000}
            height={700}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
