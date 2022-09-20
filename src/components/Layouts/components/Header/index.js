import { useEffect, useState } from 'react'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faA,
   faCircleQuestion,
   faCircleXmark,
   faCloudUpload,
   faCoins,
   faEllipsisVertical,
   faGear,
   faKeyboard,
   faMagnifyingGlass,
   faMessage,
   faSeedling,
   faSign,
   faSignOut,
   faSpinner,
   faUser,
} from '@fortawesome/free-solid-svg-icons'

import images from '~/assets/images'
import AccountItem from '~/components/AccountItem'
import Button from '~/components/Button'
import { PopperMenu, PopperWrapper } from '~/components/Popper'
import css from './Header.module.scss'

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faA} />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'language',
               code: 'Vi',
               title: 'Tiếng Việt',
            },
         ],
      },
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
   const currentUser = true

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([])
      }, 0)
   }, [])

   // Handle logic
   const handleMenuChange = menuItem => {
      console.log(menuItem)
      switch (menuItem.type) {
         case 'language': {
            break
         }
         default:
      }
   }

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/nak',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coins',
         to: '/coin',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Settings',
         to: '/settings',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log Out',
         to: '/settings',
         separate: true,
      },
   ]

   return (
      <header className={css.wrapper}>
         <div className={css.inner}>
            <div className={css.logo}>
               <img src={images.logo} alt='logo' />
            </div>

            <HeadlessTippy
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
            </HeadlessTippy>

            <div className={css.actions}>
               {currentUser ? (
                  <>
                     <Tippy content='Upload Video' delay={[0, 100]}>
                        <button className={css.actionBtn}>
                           <FontAwesomeIcon icon={faCloudUpload} />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary>Log in</Button>
                  </>
               )}

               <PopperMenu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <img
                        src='https://bom.so/0UCbdX'
                        className={css.userAvatar}
                        alt='current user'
                     />
                  ) : (
                     <button className={css.moreBtn}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </PopperMenu>
            </div>
         </div>
      </header>
   )
}

export default Header
