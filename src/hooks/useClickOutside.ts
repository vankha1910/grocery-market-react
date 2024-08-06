import React, { useEffect } from 'react'

const useClickOutside = (ref: React.RefObject<HTMLElement>, handler: () => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      console.log(event.target)
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler()
    }

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

export default useClickOutside
