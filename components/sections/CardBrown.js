import SVG from 'react-inlinesvg'

export default function CardBrown() {
  const logos = ['3r', 'bucheler', 'ress', 'sulvag', 'ardeno', 'schaffner']

  return (
    <div className="w-full h-full bg-brown-500">
      <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6">
        {logos.map((item, index) => {
          return <Logo key={index} src={item} />
        })}
      </div>
    </div>
  )
}

const Logo = ({ src }) => {
  return (
    <div className="shadow-dark">
      <div className="py-12">
        <SVG
          src={`/svg/logos/${src}.svg`}
          className="w-40 h-14 mx-auto text-blue-900 fill-current"
        />
      </div>
    </div>
  )
}
