import Link from 'next/link'

export default function Button({ children, href }) {
  const classes =
    'px-4 py-1 truncate font-sans text-xl font-bold text-blue-900 transition ease-in-out border-2 border-blue-900 duration-250 hover:bg-blue-900 hover:text-brown-500'

  if (href) {
    return (
      <Link passHref href={href}>
        <button className={classes}>{children}</button>
      </Link>
    )
  }

  return <button className={classes}>{children}</button>
}
