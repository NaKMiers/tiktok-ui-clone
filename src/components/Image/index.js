import clsx from 'clsx'
import { forwardRef, useState } from 'react'

import image from '~/assets/images'
import css from './Image.module.scss'

function Image({ src, alt, fallback: customFallback = image.noImage, className, ...props }, ref) {
   const [fallback, setFallBack] = useState('')

   return (
      <img
         className={clsx(css.wrapper, className)}
         ref={ref}
         src={fallback || src}
         {...props}
         alt={alt}
         onError={() => setFallBack(customFallback)}
      />
   )
}

export default forwardRef(Image)
