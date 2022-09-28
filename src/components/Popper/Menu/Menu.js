import PropTypes from 'prop-types'
import { useState } from 'react'
import Tippy from '@tippyjs/react/headless'

import { PopperWrapper } from '~/components/Popper'
import css from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header'

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

   const handleBack = () => {
      setHistory(prev => prev.slice(0, prev.length - 1))
   }

   const renderResult = attrs => (
      <div className={css.menuList} tabIndex='-1' {...attrs}>
         <PopperWrapper className={css.menuPopper}>
            {history.length > 1 && <Header title={current.title} onBack={handleBack} />}

            <div className={css.menuBody}>{renderItems()}</div>
         </PopperWrapper>
      </div>
   )

   // Reset to first page
   const handleReset = () => {
      setHistory(prev => prev.slice(0, 1))
   }

   return (
      <Tippy
         interactive
         offset={[12, 8]}
         delay={[0, 500]}
         hideOnClick={hideOnClick}
         placement='bottom-end'
         render={renderResult}
         onHide={handleReset}
      >
         {children}
      </Tippy>
   )
}

Menu.propTypes = {
   items: PropTypes.array,
   hideOnClick: PropTypes.bool,
   onChange: PropTypes.func,
   children: PropTypes.node.isRequired,
}

export default Menu
