import { useEffect, useState } from 'react'
type LocalStorageValue = string | number | boolean | object | null
export default function useLocalStore<T extends LocalStorageValue>(initialState: T, key: string) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : initialState
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}
