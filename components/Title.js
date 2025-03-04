import SVG from 'react-inlinesvg'

export default function Title({ title, desc, className, subtitle }) {
  return (
    <div className="w-11/12 space-y-4">
      <div
        className={`flex flex-col space-y-3 md:space-x-3 md:space-y-3 md:items-end md:flex-row  ${className}`}
      >
        <div>
          <p className="font-serif text-2xl font-bold text-blue-900 md:text-4xl xl:text-5xl">
            {title}
          </p>
          <p className="font-serif text-2xl text-blue-900 md:text-4xl xl:text-5xl">{subtitle}</p>
        </div>
        <SVG src="/svg/line.svg" />
      </div>
      <p className="font-sans text-base font-bold text-gray-900 md:text-lg">{desc}</p>
    </div>
  )
}
