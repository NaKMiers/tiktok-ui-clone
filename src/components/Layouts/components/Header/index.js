import {
   faA,
   faCircleQuestion,
   faCircleXmark,
   faEllipsisVertical,
   faKeyboard,
   faMagnifyingGlass,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import { useEffect, useState } from 'react'

import images from '~/assets/images'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import { PopperMenu, PopperWrapper } from '~/components/Popper'
import css from './Header.module.scss'

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faA} />,
      title: 'English',
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
]

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
               <Button text>Upload</Button>
               <Button primary>Log in</Button>

               <PopperMenu items={MENU_ITEMS}>
                  <button className={css.moreBtn}>
                     <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
               </PopperMenu>
            </div>
         </div>
      </header>
   )
}

export default Header
