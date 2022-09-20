import clsx from 'clsx'
import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import css from './Button.module.scss'

function Button(
   {
      primary = false,
      outline = false,
      text = false,
      rounded = false,
      disabled = false,
      small = false,
      large = false,
      to,
      href,
      children,
      leftIcon,
      rightIcon,
      onClick,
      className,
      ...restProps
   },
   ref
) {
   let Comp = 'button'
   const props = {
      onClick,
      ...restProps,
   }

   // remove events button when diabled
   if (disabled) {
      Object.keys(props).forEach(propKey => {
         if (propKey.startsWith('on') && typeof props[propKey] === 'function') {
            delete props[propKey]
         }
      })
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
            { [css.text]: text },
            { [css.rounded]: rounded },
            { [css.disabled]: disabled },

            { [css.small]: small },
            { [css.large]: large },

            { [className]: className }
         )}
         {...props}
      >
         {leftIcon && <span className={css.icon}>{leftIcon}</span>}
         <span className={css.title}>{children}</span>
         {rightIcon && <span className={css.icon}>{rightIcon}</span>}
      </Comp>
   )
}

export default forwardRef(Button)
