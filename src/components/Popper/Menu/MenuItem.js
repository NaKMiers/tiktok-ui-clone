import Button from '~/components/Button'
import css from './Menu.module.scss'

function MenuItem({ data, onClick }) {
   return (
      <Button className={css.menuItem} leftIcon={data.icon} to={data.to} onClick={onClick}>
         {data.title}
      </Button>
   )
}

export default MenuItem
