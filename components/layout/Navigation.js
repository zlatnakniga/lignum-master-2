import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

import { locales } from '../../i18n.json'

const NavItem = ({ children, href }) => {
  const router = useRouter()

  return (
    <li className="w-full font-serif text-white md:w-auto md:mr-14 shadow-card">
      <Link
        className="block py-4 text-center border-b-2 border-brown-500 md:py-0 md:border-b-0 md:border-transparent hover:text-brown-500"
        href={href}
      >
        {router.asPath === href && (
          <SVG
            src="/svg/dot.svg"
            className="relative flex-shrink-0 -left-4 top-4 md:-left-2 md:top-0"
          />
        )}
        {children}
      </Link>
    </li>
  )
}

export default function Navigation({ sticky }) {
  const [menu, setMenu] = useState(false)

  const { t } = useTranslation('common')

  const router = useRouter()

  return (
    <div
      className={`flex items-center bg-blue-900 ${
        sticky ? 'w-full sticky top-0 z-50 shadow-dark' : ''
      }`}
    >
      <div className="container">
        <div className="items-center justify-end py-6 md:justify-between row">
          <div className="mr-auto col-3">
            <Link passHref href="/">
              <SVG
                aria-label="Logo"
                src="/svg/logo.svg"
                className="flex-shrink-0 h-6 fill-current w-28 text-brown-500 hover:cursor-pointer"
              />
            </Link>
          </div>
          <div className="block col-2 md:hidden">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src={`${menu ? '/svg/close.svg' : '/svg/menu.svg'}`}
                className="w-8 h-8 fill-current text-brown-500"
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>

          <div
            className={`md:col-6 lg:col-8 md:flex justify-center md:justify-end
              ${menu ? 'flex bg-dark-950 ' : ' hidden'}`}
          >
            <ul className="flex flex-col items-center w-full p-5 md:w-auto md:p-0 md:flex-row">
              <NavItem href="/">{t('home')}</NavItem>
              <NavItem href="/about">{t('about us')}</NavItem>
              <NavItem href="/services">{t('services')}</NavItem>
              <NavItem href="/contact">{t('contact')}</NavItem>
              <div className="relative inline-block pt-4 text-white md:pt-0">
                <Menu as="div" className="relative z-50 inline-block text-left">
                  <Menu.Button className="inline-flex items-start text-white uppercase group hover:text-brown-500">
                    {router.locale}
                    <SVG
                      aria-hidden="true"
                      src="/svg/arrow-down.svg"
                      className="w-6 h-6 duration-200 ease-in-out fill-current text-white-950 group-hover:text-primary-950"
                    />
                  </Menu.Button>

                  <Menu.Items className="absolute right-0 w-16 mt-2 text-center origin-top-right bg-blue-900 border divide-y rounded-md border-brown-500 divide-brown-500 ">
                    {locales.map((locale, index) => {
                      return (
                        <Menu.Item key={index}>
                          <Link href="/" locale={locale} passHref>
                            <button
                              className="w-full py-2 text-sm text-white hover:text-brown-600"
                              onClick={() => setMenu(false)}
                            >
                              {getLocale(locale)}
                            </button>
                          </Link>
                        </Menu.Item>
                      )
                    })}
                  </Menu.Items>
                </Menu>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const getLocale = (locale) => {
  switch (locale) {
    case 'de':
      return <p>DE</p>
    case 'en':
      return <p>EN</p>
    case 'sq':
      return <p>SQ</p>
    case 'mk':
      return <p>MK</p>
    default:
      return <p>DE</p>
  }
}
