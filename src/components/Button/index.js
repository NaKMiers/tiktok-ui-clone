import clsx from 'clsx'
import { Link } from 'react-router-dom'
import css from './Button.module.scss'

function Button({
   primary = false,
   outline = false,
   small = false,
   large = false,
   to,
   href,
   children,
   ...restProps
}) {
   let Comp = 'button'
   const props = {
      ...restProps,
   }

   if (to) {
      props.to = to
      Comp = Link
   } else if (href) {
      props.href = href
      Comp = 'a'
   }

   return (
      <Comp
         className={clsx(
            css.wrapper,
            { [css.primary]: primary },
            { [css.outline]: outline },
            { [css.small]: small },
            { [css.large]: large }
         )}
         {...props}
      >
         <span>{children}</span>
      </Comp>
   )
}

export default Button
