import SVG from 'react-inlinesvg'

export default function List({ children }) {
  return (
    <li className="flex items-center space-x-5">
      <SVG
        src="/svg/icons/checked.svg"
        className="flex-shrink-0 w-5 h-5 fill-current text-brown-500"
      />
      <p className="font-sans text-lg font-bold text-gray-900">{children}</p>
    </li>
  )
}
