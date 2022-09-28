import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'

import css from './SuggestedAccounts.module.scss'
import { PopperWrapper } from '~/components/Popper'
import AccountPreview from './AccountPreview'

function AccountItem() {
   const renderReview = attrs => {
      return (
         <div tabIndex='-1' {...attrs}>
            <PopperWrapper>
               <AccountPreview />
            </PopperWrapper>
         </div>
      )
   }

   return (
      // Using a wrapper <div> tag around the reference element
      // solves this by creating a new parentNode context.
      <div>
         <Tippy
            interactive
            delay={[500, 0]}
            offset={[-16, 0]}
            placement='bottom'
            render={renderReview}
         >
            <div className={css.accountItem}>
               <img className={css.avatar} src='https://bom.so/tdNePn' alt='avatar' />

               <div className={css.itemInfo}>
                  <p className={css.nickname}>
                     <strong>nguyenanhkhoa</strong>
                     <FontAwesomeIcon className={css.checkIcon} icon={faCheckCircle} />
                  </p>
                  <p className={css.name}>Nguyen Anh Khoa</p>
               </div>
            </div>
         </Tippy>
      </div>
   )
}

AccountItem.propTypes = {
   // data: PropTypes.object.isRequired,
}

export default AccountItem
