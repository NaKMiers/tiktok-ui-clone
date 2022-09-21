import {
   faA,
   faCircleQuestion,
   faCoins,
   faEllipsisVertical,
   faGear,
   faKeyboard,
   faPlus,
   faSignOut,
   faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import clsx from 'clsx'
import images from '~/assets/images'
import Button from '~/components/Button'
import { InboxIcon, MessageIcon } from '~/components/Icons'
import Image from '~/components/Image'
import { PopperMenu } from '~/components/Popper'
import Search from '../Search'
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
   const currentUser = true

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

            <Search />

            <div className={css.actions}>
               {currentUser ? (
                  <>
                     <Tippy content='Upload Video' delay={[0, 100]}>
                        <Button
                           leftIcon={<FontAwesomeIcon icon={faPlus} />}
                           outline
                           className={clsx(css.actionBtn, css.uploadBtn)}
                        >
                           Upload
                        </Button>
                     </Tippy>
                     <Tippy content='Upload Video' delay={[0, 100]}>
                        <button className={css.actionBtn}>
                           <MessageIcon />
                        </button>
                     </Tippy>
                     <Tippy content='Upload Video' delay={[0, 100]}>
                        <button className={css.actionBtn}>
                           <InboxIcon />
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
                     <Image
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
