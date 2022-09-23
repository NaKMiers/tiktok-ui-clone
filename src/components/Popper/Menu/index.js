import Tippy from '@tippyjs/react/headless'

import { PopperWrapper } from '~/components/Popper'
import css from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header'
import { useState } from 'react'

const defaultFn = () => {}

function Menu({ items = [], hideOnClick = false, onChange = defaultFn, children }) {
   const [history, setHistory] = useState([{ data: items }])
   const current = history[history.length - 1]

   const renderItems = () =>
      current.data.map((item, index) => {
         const isParent = !!item.children

         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory(prev => [...prev, item.children])
                  } else {
                     onChange(item)
                  }
               }}
            />
         )
      })

   return (
      <Tippy
         interactive
         offset={[12, 8]}
         delay={[0, 500]}
         hideOnClick={hideOnClick}
         placement='bottom-end'
         render={attrs => (
            <div className={css.menuList} tabIndex='-1' {...attrs}>
               <PopperWrapper className={css.menuPopper}>
                  {history.length > 1 && (
                     <Header
                        title={current.title}
                        onBack={() => {
                           setHistory(prev => prev.slice(0, prev.length - 1))
                        }}
                     />
                  )}

                  <div className={css.menuBody}>{renderItems()}</div>
               </PopperWrapper>
            </div>
         )}
         onHide={() => setHistory(prev => prev.slice(0, 1))}
      >
         {children}
      </Tippy>
   )
}

export default Menu
