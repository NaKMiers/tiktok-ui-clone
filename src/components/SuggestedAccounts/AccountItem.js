import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import css from './SuggestedAccounts.module.scss'

function AccountItem({ data }) {
   return (
      <div className={css.accountItem}>
         <img className={css.avatar} src='https://bom.so/tdNePn' alt='avatar' />

         <div className={css.itemInfo}>
            <p className={css.nickname}>
               <strong>nguyenanhkhoa</strong>
               <FontAwesomeIcon className={css.checkIcon} icon={faCheckCircle} />
            </p>
            <p className={css.name}>asdasd</p>
         </div>
      </div>
   )
}

AccountItem.propTypes = {
   data: PropTypes.object.isRequired,
}

export default AccountItem
