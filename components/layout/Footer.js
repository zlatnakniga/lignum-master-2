import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import SVG from 'react-inlinesvg'

export default function Footer() {
  const { t } = useTranslation('common')

  const contactInfo = [
    {
      src: 'location',
      item: 'location',
      href: 'https://www.google.com/maps/@41.8697329,20.9324841,208m/data=!3m1!1e3',
      target: true,
    },
    {
      src: 'mail',
      item: 'info@lignumland.com',
      href: 'mailto:info@lignumland.com',
    },
    { src: 'fix', item: '+389 (0) 42 314 000', href: 'tel:+38942314000' },
    { src: 'tel', item: '+389 (0) 71 227 900', href: 'tel:+38971227900' },
  ]
  return (
    <>
      <div className="w-full h-full py-10 md:py-20 bg-black-100">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <div className="space-y-10 row md:space-y-0">
                <div className="md:col-4">
                  <Link passHref href="/">
                    <SVG
                      aria-label="Logo"
                      src="/svg/logo.svg"
                      className="flex-shrink-0 w-48 fill-current h-11 text-brown-500 hover:cursor-pointer"
                    />
                  </Link>
                  <p className="mt-6 font-sans text-white font-lg">{t('footer_desc')}</p>
                </div>
                <div className="md:col-4">
                  <div className="md:ml-10">
                    <Title>{t('leistungen')}</Title>
                    <ul className="space-y-4">
                      <NavItem href="/">{t('home')}</NavItem>
                      <NavItem href="/about">{t('about us')}</NavItem>
                      <NavItem href="/services">{t('services')}</NavItem>
                      <NavItem href="/contact">{t('contact')}</NavItem>
                    </ul>
                  </div>
                </div>
                <div className="md:col-4">
                  <Title>{t('kontakt')}</Title>
                  <ul className="space-y-4">
                    {contactInfo.map((info, index) => {
                      return (
                        <Contact
                          key={index}
                          src={info.src}
                          info={t(info.item)}
                          href={info.href}
                          target={info.target}
                        />
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-4 md:pl-0 md:text-center bg-brown-500">
        <p className="py-2 text-base">
          Copyright {new Date().getFullYear()}.{t('copyright')}
          <a
            className="border-white hover:border-b"
            rel="external"
            href="https://www.luckymedia.dev/?ref=lignum"
          >
            {` `}Lucky Media.
          </a>
        </p>
      </div>
    </>
  )
}

const NavItem = ({ children, href }) => {
  return (
    <li className="flex items-center space-x-2">
      <SVG src="/svg/icons/right-arrow.svg" className="flex-shrink-0 w-6 h-6" />
      <Link href={href}>
        <p className="font-sans text-base font-normal text-white">{children}</p>
      </Link>
    </li>
  )
}

const Title = ({ children }) => {
  return (
    <div className="mb-8">
      <p className="pb-3 font-serif text-2xl font-bold text-white">{children}</p>
      <div className="w-20 h-1 bg-brown-500"></div>
    </div>
  )
}

const Contact = ({ src, info, href, target }) => {
  return (
    <li className="flex items-center">
      <SVG
        src={`/svg/icons/${src}.svg`}
        className="flex-shrink-0 w-8 h-8 fill-current text-brown-500"
      />
      {target ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={href}
          className="ml-2 font-sans text-base font-normal text-white"
        >
          {info}
        </a>
      ) : (
        <a href={href} className="ml-2 font-sans text-base font-normal text-white">
          {info}
        </a>
      )}
    </li>
  )
}
