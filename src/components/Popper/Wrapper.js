import clsx from 'clsx'
import css from './Poper.module.scss'

function Wrapper({ className, children }) {
   return <div className={clsx(css.wrapper, className)}>{children}</div>
}

export default Wrapper
