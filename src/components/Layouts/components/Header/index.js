import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import css from './Header.module.scss'
import images from '~/assets/images'
import { PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'

function Header() {
   const [searchResult, setSearchResult] = useState([])

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([])
      }, 0)
   }, [])

   return (
      <header className={css.wrapper}>
         <div className={css.inner}>
            <div className={css.logo}>
               <img src={images.logo} alt='logo' />
            </div>
            <Tippy
               interactive
               visible={searchResult.length > 0}
               render={attrs => (
                  <div className={css.searchResult} tabIndex='-1' {...attrs}>
                     <PopperWrapper>
                        <h4 className={css.searchTitle}>Account</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={css.search}>
                  <input type='text' placeholder='Search account and videos' spellCheck={false} />
                  <button className={css.clear}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>

                  <FontAwesomeIcon className={css.loading} icon={faSpinner} />

                  <button className={css.searchBtn}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>
            <div className={css.actions}>
               <Button primary>Log in</Button>
               <Button outline>Log in</Button>
            </div>
         </div>
      </header>
   )
}

export default Header
