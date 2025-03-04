import useWindowSize from 'hooks/useWindowSize'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export default function HeaderSection() {
  const { width } = useWindowSize()
  const { t } = useTranslation('common')

  return (
    <div className="relative">
      <div
        className="absolute w-full h-full bg-blue-900 bg-opacity-80"
        style={{
          // background: 'linear-gradient(180deg, #252634 0%, rgba(37, 38, 52, 0) 50%)',
          zIndex: '-1',
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full" style={{ zIndex: '-2' }}>
        {width > 768 ? (
          <video className="object-cover w-full h-full" playsInline autoPlay muted loop>
            <source src="/videos/promo.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            priority
            src="/images/h1.jpg"
            layout="fill"
            alt="Header"
            objectFit="cover"
            quality={100}
          />
        )}
      </div>
      <div className="row lg:col-8 md:col-10 xl:col-6 mx-auto text-center h-[400px] md:h-[600px] flex flex-col items-center justify-center">
        <h1 className="font-serif text-2xl font-bold md:text-4xl xl:text-5xl text-brown-500">
          {t('die kunst des handwerks')}
        </h1>
        <p className="font-serif text-2xl font-bold text-white md:text-4xl xl:text-5xl">
          {t('lass uns fur dich bauen')}
        </p>
        <p className="pt-4 font-sans text-lg font-bold text-white">
          {t('wir sind die meister im biegen von holz')}
        </p>
      </div>
    </div>
  )
}
