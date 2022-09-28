import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '~/components/Button'
import css from './AccountPreview.module.scss'

function AccountPreview() {
   return (
      <div className={css.wrapper}>
         <header className={css.header}>
            <img className={css.avatar} src='https://bom.so/tdNePn' alt='' />
            <Button primary className={css.followBtn}>
               Follow
            </Button>
         </header>
         <section className={css.body}>
            <p className={css.nickname}>
               <strong>nguyenanhkhoa</strong>
               <FontAwesomeIcon className={css.checkIcon} icon={faCheckCircle} />
            </p>
            <p className={css.name}>Nguyen Anh Khoa</p>
            <p className={css.analytics}>
               <strong className={css.value}>10.1M </strong>
               <span className={css.label}>Follower</span>
               <strong className={css.value}>10.1M </strong>
               <span className={css.label}>Likes</span>
            </p>
         </section>
      </div>
   )
}

export default AccountPreview
