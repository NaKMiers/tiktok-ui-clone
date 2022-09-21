import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadlessTippy from '@tippyjs/react/headless'
import { useEffect, useRef, useState } from 'react'
import 'tippy.js/dist/tippy.css'

import AccountItem from '~/components/AccountItem'
import { SearchIcon } from '~/components/Icons'
import { PopperWrapper } from '~/components/Popper'
import css from './Search.module.scss'

function Search() {
   const [searchValue, setSearchValue] = useState('')
   const [searchResult, setSearchResult] = useState([])
   const [showResult, setShowResult] = useState(true)
   const [loading, setLoading] = useState(false)

   const inputRef = useRef()

   useEffect(() => {
      if (!searchValue.trim()) {
         setSearchResult([])
         return
      }

      setLoading(true)

      fetch(
         `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
            searchValue
         )}&type=less`
      )
         .then(res => res.json())
         .then(res => {
            setSearchResult(res.data)
            setLoading(false)
         })
         .catch(() => {
            setLoading(false)
         })
   }, [searchValue])

   const handleClear = () => {
      setSearchValue('')
      setSearchResult([])
      inputRef.current.focus()
   }

   const handleHideResult = () => {
      setShowResult(false)
   }

   return (
      <HeadlessTippy
         onClickOutside={handleHideResult}
         interactive
         visible={showResult && searchResult.length > 0}
         render={attrs => (
            <div className={css.searchResult} tabIndex='-1' {...attrs}>
               <PopperWrapper>
                  <h4 className={css.searchTitle}>Account</h4>
                  {searchResult.map(r => (
                     <AccountItem key={r.id} data={r} />
                  ))}
               </PopperWrapper>
            </div>
         )}
      >
         <div className={css.search}>
            <input
               value={searchValue}
               onChange={e => setSearchValue(e.target.value)}
               onFocus={() => setShowResult(true)}
               ref={inputRef}
               type='text'
               placeholder='Search account and videos'
               spellCheck={false}
            />

            {!!searchValue && !loading && (
               <button onClick={handleClear} className={css.clear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}

            {loading && <FontAwesomeIcon className={css.loading} icon={faSpinner} />}

            <button className={css.searchBtn}>
               <SearchIcon />
            </button>
         </div>
      </HeadlessTippy>
   )
}

export default Search
