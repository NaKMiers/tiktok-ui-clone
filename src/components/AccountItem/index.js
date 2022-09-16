import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import css from './AccountItem.module.scss'

function AccountItem() {
   return (
      <div className={css.wrapper}>
         <img className={css.avatar} src='https://bom.so/0UCbdX' alt='avatar' />
         <div className={css.info}>
            <p className={css.name}>
               <span>Nguyen Anh Khoa</span>
               <FontAwesomeIcon className={css.checkIcon} icon={faCheckCircle} />
            </p>
            <span className={css.username}>nguyenanhkhoa</span>
         </div>
      </div>
   )
}

export default AccountItem
