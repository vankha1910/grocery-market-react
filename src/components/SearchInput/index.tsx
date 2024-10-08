import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchIcon } from '~/assets'

const SearchInput = () => {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)

  // useClickOutside(searchInputRef, () => setShowSearch(false))
  const handleShowSearch = () => {
    setShowSearch(!showSearch)
  }
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInputRef.current?.value) {
      navigate(`products?search=${searchInputRef.current.value}`)
      window.location.reload()
    }
  }
  // const handleBlurSearch = () => {
  //   if (showSearch) setShowSearch(false)
  // }
  useEffect(() => {
    if (showSearch) searchInputRef?.current?.focus()
  }, [showSearch])

  useEffect(() => {
    const searchValue = new URLSearchParams(window.location.search).get('search')
    if (searchValue && searchInputRef.current) {
      searchInputRef.current.value = searchValue
    }
  }, [])
  return (
    <button className='top-act__btn'>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search our coffees, brands and more...'
          className={`top-act__search-input ${showSearch ? 'show' : 'hide'}`}
          ref={searchInputRef}
          id='search'
          // onBlur={handleBlurSearch}
        />
      </form>
      <img onClick={handleShowSearch} className='icon top-act__icon' src={SearchIcon} alt='Search icon' />
    </button>
  )
}

export default SearchInput
