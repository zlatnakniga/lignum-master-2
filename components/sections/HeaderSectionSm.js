import Image from 'next/image'

export default function HeaderSectionSm({ title, desc, src }) {
  return (
    <div className="relative">
      <div
        className="absolute w-full h-full bg-blue-800"
        style={{
          background: 'linear-gradient(180deg, #252634 0%, rgba(37, 38, 52, 0.2) 100%)',
          zIndex: '-1',
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full" style={{ zIndex: '-2' }}>
        <div>
          <Image
            priority
            src={`/images/${src}.jpg`}
            layout="fill"
            alt="Header"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mx-auto text-center row md:col-10 lg:col-8 xl:col-6 h-80">
        <h1 className="font-serif text-3xl font-bold md:text-4xl xl:text-5xl text-brown-500">
          {title}
        </h1>
        <p className="font-sans text-base font-bold text-white">{desc}</p>
      </div>
    </div>
  )
}
