import Tippy from '@tippyjs/react/headless'

import { PopperWrapper } from '~/components/Popper'
import css from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header'
import { useState } from 'react'

const defaultFn = () => {}

function Menu({ items = [], onChange = defaultFn, children }) {
   const [history, setHistory] = useState([{ data: items }])
   const current = history[history.length - 1]

   const renderItems = () =>
      current.data.map(item => {
         const isParent = !!item.children

         return (
            <MenuItem
               key={item.title}
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
         placement='bottom-end'
         delay={[0, 500]}
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
                  {renderItems()}
               </PopperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   )
}

export default Menu
