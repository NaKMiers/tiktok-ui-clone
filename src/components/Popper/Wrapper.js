import css from './Poper.module.scss'

function Wrapper({ children }) {
   return <div className={css.wrapper}>{children}</div>
}

export default Wrapper
