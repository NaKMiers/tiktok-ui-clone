import PropTypes from 'prop-types'
import clsx from 'clsx'

import css from './Poper.module.scss'

function Wrapper({ className, children }) {
   return <div className={clsx(css.wrapper, className)}>{children}</div>
}

Wrapper.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
}

export default Wrapper
