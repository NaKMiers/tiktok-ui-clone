import PropTypes from 'prop-types'
import clsx from 'clsx'

import Button from '~/components/Button'
import css from './Menu.module.scss'

function MenuItem({ data, onClick }) {
   return (
      <Button
         className={clsx(css.menuItem, { [css.separate]: data.separate })}
         leftIcon={data.icon}
         to={data.to}
         onClick={onClick}
      >
         {data.title}
      </Button>
   )
}

MenuItem.propTypes = {
   data: PropTypes.object.isRequired,
   onClick: PropTypes.func,
}

export default MenuItem
