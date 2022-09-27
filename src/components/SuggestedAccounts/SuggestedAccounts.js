import PropTypes from 'prop-types'

import css from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem'

function SuggestedAccounts({ label }) {
   return (
      <div className={css.wrapper}>
         <p className={css.label}>{label}</p>

         <AccountItem />
         <AccountItem />
         <AccountItem />
         <AccountItem />

         <p className={css.moreBtn}>See all</p>
      </div>
   )
}

SuggestedAccounts.propTypes = {
   label: PropTypes.string,
}

export default SuggestedAccounts
