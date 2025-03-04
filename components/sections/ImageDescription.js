import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import SVG from 'react-inlinesvg'

import Title from '@/components/Title'
import WrapContainer from '@/components/WrapContainer'

export default function ImageDescription({ title, desc, src, items = [] }) {
  const { t } = useTranslation()

  return (
    <div className="relative py-20 overflow-hidden bg-wood">
      <WrapContainer>
        <div className="row">
          <div className="lg:col-5 md:col-6">
            <div className="inline-flex p-2 bg-white shadow-card">
              <div>
                <Image
                  src={`/images/${src}`}
                  alt="Working with wood"
                  width={450}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0 lg:col-7 md:col-6" style={{ zIndex: '1' }}>
            <div className="p-4 -mx-4 bg-white md:p-8 md:mt-32 lg:mt-20 shadow-card lg:-ml-28 md:-ml-44">
              <Title title={title} desc={desc} />
              <div className="grid pt-10 lg:grid-cols-2 md:grid-cols-1 flex-gap-12 xl:pt-14">
                {items.map((item, index) => (
                  <Info
                    key={index}
                    src={`/svg/icons/${item.src}.svg`}
                    title={t(item.title)}
                    desc={t(item.desc)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </WrapContainer>
    </div>
  )
}

const Info = ({ src, title, desc }) => {
  return (
    <div className="flex items-center">
      <SVG src={src} className="flex-shrink-0 w-20 h-20 fill-current text-brown-500" />
      <div className="ml-8">
        <p className="pb-1 font-serif text-xl font-bold text-gray-900">{title}</p>
        <p className="font-sans text-base font-normal text-gray-900">{desc}</p>
      </div>
    </div>
  )
}
