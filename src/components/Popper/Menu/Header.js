import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import css from './Menu.module.scss'

function Header({ title, onBack }) {
   return (
      <header className={css.header}>
         <button className={css.backBtn} onClick={onBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
         </button>
         <h4 className={css.headerTitle}>{title}</h4>
      </header>
   )
}

export default Header
