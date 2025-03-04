import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import Navigation from '@/components/layout/Navigation'

export default function Error404() {
  const { t } = useTranslation('common')

  return (
    <div>
      <Navigation />
      <div className="relative h-screen">
        <div
          className="absolute w-full h-full bg-blue-800"
          style={{
            background: 'linear-gradient(180deg, #252634 0%, rgba(37, 38, 52, 0.2) 100%)',
            zIndex: '-1',
          }}
        ></div>
        <div className="absolute object-cover w-full h-full" style={{ zIndex: '-2' }}>
          <div>
            <Image
              src="/images/h1.jpg"
              layout="fill"
              alt="Header"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="mx-auto h-[400px] md:h-[600px] flex items-center justify-center">
              <div className="text-center">
                <p className="font-serif text-2xl font-bold md:text-4xl xl:text-5xl text-brown-500">
                  {t('sieht aus als warst du im wald verloren')}
                </p>
                <p className="pt-4 font-sans text-lg font-bold text-white">
                  {t('die von ihnen gesuchte seite wurde verschoben entfernt')}
                </p>
                <button className="px-3 py-1 mt-6 text-lg font-bold text-gray-900 bg-brown-500">
                  <Link href="/">{t('geh zuruck')}</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
