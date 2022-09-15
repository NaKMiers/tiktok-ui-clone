import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import css from './DefaultLayout.module.scss'

function DefaultLayout({ children }) {
   return (
      <div className={css.wrapper}>
         <Header />

         <div className={css.container}>
            <Sidebar />

            <div className={css.content}>{children}</div>
         </div>
      </div>
   )
}

export default DefaultLayout
