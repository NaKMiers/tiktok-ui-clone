import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import css from './AccountItem.module.scss'
import Image from '../Image'
import { Link } from 'react-router-dom'

function AccountItem({ data }) {
   return (
      <Link to={`/@${data.nickname}`} className={css.wrapper}>
         <Image className={css.avatar} src={data.avatar} alt={data.full_name} />
         <div className={css.info}>
            <p className={css.name}>
               <span>{data.full_name}</span>
               {data.tick && <FontAwesomeIcon className={css.checkIcon} icon={faCheckCircle} />}
            </p>
            <span className={css.username}>{data.nickname}</span>
         </div>
      </Link>
   )
}

export default AccountItem
