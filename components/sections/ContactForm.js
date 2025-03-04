import useTranslation from 'next-translate/useTranslation'

import Button from '@/components/Button'

export default function ContactForm() {
  const { t } = useTranslation('common')

  return (
    <form name="contact" method="POST" data-netlify="true" className="p-8 space-y-7">
      <input type="hidden" name="form-name" value="contact" />

      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700 sr-only" htmlFor="name">
          {t('name')}
        </label>
        <input
          className="w-full px-2 py-3 font-sans font-bold placeholder-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
          id="name"
          name="name"
          type="text"
          placeholder={t('name')}
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700 sr-only" htmlFor="email">
          {t('e mail adresse')}
        </label>
        <input
          className="w-full px-2 py-3 font-sans font-bold placeholder-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
          id="email"
          name="email"
          type="email"
          placeholder={t('e mail adresse')}
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700 sr-only" htmlFor="message">
          {t('botschaft')}
        </label>
        <textarea
          id="message"
          rows="10"
          className="w-full px-2 py-3 font-sans font-bold placeholder-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
          name="message"
          type="textarea"
          placeholder={t('botschaft')}
          required
        ></textarea>
      </div>
      <Button type="submit"> {t('submit')}</Button>
    </form>
  )
}
