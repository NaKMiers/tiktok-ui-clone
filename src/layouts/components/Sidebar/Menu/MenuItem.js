import clsx from 'clsx'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import css from './Menu.module.scss'

function MenuItem({ to, title, icon, activeIcon }) {
   return (
      <NavLink to={to} className={nav => clsx(css.menuItem, { [css.active]: nav.isActive })} end>
         <span className={css.icon}>{icon}</span>
         <span className={css.activeIcon}>{activeIcon}</span>
         <span className={css.title}>{title}</span>
      </NavLink>
   )
}

MenuItem.propTypes = {
   to: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   icon: PropTypes.node.isRequired,
}

export default MenuItem
