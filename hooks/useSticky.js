import { useEffect, useState } from 'react'

function useSticky() {
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isSticky }
}

export default useSticky
