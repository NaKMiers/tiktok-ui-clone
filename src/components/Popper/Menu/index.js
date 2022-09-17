import Tippy from '@tippyjs/react/headless'

import { PopperWrapper } from '~/components/Popper'
import css from './Menu.module.scss'
import MenuItem from './MenuItem'

function Menu({ items = [], children }) {
   const renderItems = () => items.map(i => <MenuItem key={i.title} data={i} />)

   return (
      <Tippy
         interactive
         placement='bottom-end'
         delay={[0, 500]}
         render={attrs => (
            <div className={css.menuList} tabIndex='-1' {...attrs}>
               <PopperWrapper className={css.menuPopper}>{renderItems()}</PopperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   )
}

export default Menu
