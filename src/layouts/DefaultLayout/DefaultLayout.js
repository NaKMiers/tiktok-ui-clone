import PropTypes from 'prop-types'

import css from './DefaultLayout.module.scss'
import Header from '../components/Header'
import Sidebar from './Sidebar'

function DefaultLayout({ children }) {
   return (
      <div className={css.wrapper}>
         <Header />

         <div className={css.container}>
            <Sidebar />

            <div className={css.content}>{children}</div>
         </div>
      </div>
   )
}

DefaultLayout.propTypes = {
   children: PropTypes.node.isRequired,
}

export default DefaultLayout
