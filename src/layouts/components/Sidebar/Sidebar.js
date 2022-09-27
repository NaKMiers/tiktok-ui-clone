import {
   HomeIcon,
   HomeActiveIcon,
   LiveIcon,
   UserGroupActiveIcon,
   UserGroupIcon,
   LiveActiveIcon,
} from '~/components/Icons'
import SuggestedAccounts from '~/components/SuggestedAccounts'
import config from '~/config'
import Menu, { MenuItem } from './Menu'
import css from './Sidebar.module.scss'

function Sidebar() {
   return (
      <aside className={css.wrapper}>
         <Menu>
            <MenuItem
               title='For You'
               to={config.routes.home}
               icon={<HomeIcon />}
               activeIcon={<HomeActiveIcon />}
            />
            <MenuItem
               title='Following'
               to={config.routes.following}
               icon={<UserGroupIcon />}
               activeIcon={<UserGroupActiveIcon />}
            />
            <MenuItem
               title='LIVE'
               to={config.routes.live}
               icon={<LiveIcon />}
               activeIcon={<LiveActiveIcon />}
            />
         </Menu>

         <SuggestedAccounts label='Suggested accounts' />

         <SuggestedAccounts label='Following accounts' />
      </aside>
   )
}

export default Sidebar
