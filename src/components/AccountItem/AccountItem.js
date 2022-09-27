import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import css from './AccountItem.module.scss'
import Image from '../Image'

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

AccountItem.propTypes = {
   data: PropTypes.object,
}

export default AccountItem
