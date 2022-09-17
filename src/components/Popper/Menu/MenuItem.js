import Button from '~/components/Button'
import css from './Menu.module.scss'

function MenuItem({ data }) {
   return (
      <Button className={css.menuItem} leftIcon={data.icon} to={data.to}>
         {data.title}
      </Button>
   )
}

export default MenuItem
