import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import Title from '@/components/Title'
import WrapContainer from '@/components/WrapContainer'

export default function LastestProject() {
  const { t } = useTranslation('common')

  return (
    <div className="py-20 md:py-32">
      <WrapContainer>
        <div className="row">
          <div className="col-12">
            <Title title={t('neueste projekte')} desc={t('geniesen sie einige der besten')} />
            <div className="mt-20 space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <Image
                    src="/images/index-5.jpg"
                    alt="Working with wood"
                    width={430}
                    height={240}
                    className="object-cover w-full h-full col-span-2"
                  />
                </div>
                <div>
                  <Image
                    src="/images/index-6.jpg"
                    alt="Working with wood"
                    width={430}
                    height={240}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <Image
                    src="/images/index-7.jpg"
                    alt="Working with wood"
                    width={430}
                    height={240}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="md:col-span-2">
                  <Image
                    src="/images/index-8.jpg"
                    alt="Working with wood"
                    width={800}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <Image
                    src="/images/index-9.jpg"
                    alt="Working with wood"
                    width={425}
                    height={325}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Image
                    src="/images/index-10.jpg"
                    alt="Working with wood"
                    width={562}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <Image
                    src="/images/index-11.jpg"
                    alt="Working with wood"
                    width={562}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapContainer>
    </div>
  )
}
