import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import css from './Button.module.scss'
function Button(
   {
      to,
      href,

      primary = false,
      outline = false,
      text = false,
      rounded = false,
      disabled = false,

      small = false,
      large = false,

      leftIcon,
      rightIcon,

      onClick,
      className,
      children,

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

Button.propTypes = {
   to: PropTypes.string,
   href: PropTypes.string,

   primary: PropTypes.bool,
   outline: PropTypes.bool,
   text: PropTypes.bool,
   rounded: PropTypes.bool,
   disabled: PropTypes.bool,

   small: PropTypes.bool,
   large: PropTypes.bool,

   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,

   onClick: PropTypes.func,
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
}

export default Button
