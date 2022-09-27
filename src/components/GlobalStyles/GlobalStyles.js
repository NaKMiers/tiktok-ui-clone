import PropTypes from 'prop-types'
import { Children } from 'react'

import './GlobalStyles.scss'

function GlobalStyles({ children }) {
   return Children.only(children)
}

GlobalStyles.propTypes = {
   children: PropTypes.node.isRequired,
}

export default GlobalStyles
