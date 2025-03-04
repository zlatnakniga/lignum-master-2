import { blueCard } from 'content/home'
import useTranslation from 'next-translate/useTranslation'
import SVG from 'react-inlinesvg'

export default function CardBlue() {
  const { t } = useTranslation('home')

  return (
    <div className="grid w-full h-full grid-cols-2 overflow-hidden bg-blue-900 md:grid-cols-3 xl:grid-cols-6">
      {blueCard.map((item, index) => {
        return (
          <div
            key={index}
            className={`shadow-card hover:bg-blue-800 px-5 transition duration-250 ease-in-out ${
              index % 2 === 1 ? 'bg-blue-800' : ''
            }`}
          >
            <div className="pt-8 pb-10 space-y-4 md:pt-10 md:pb-16">
              <SVG
                src={item.src}
                className="flex-shrink-0 w-auto fill-current h-14 text-brown-500"
              />
              <p className="font-serif text-xl font-normal text-white">{t(item.title)}</p>
              <p className="font-sans text-base font-normal text-white">{t(`desc_${index + 1}`)}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
