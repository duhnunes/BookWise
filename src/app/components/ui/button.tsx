'use client'

import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: `inline-flex items-center gap-5 rounded-md select-none hover:brightness-90 bg-transparent font-medium`,

  variants: {
    variant: {
      default: `bg-gray-600 text-gray-200`,
      link: 'gap-3',
      button: 'bg-gray-600 rounded',
    },

    size: {
      default: `py-5 px-6`,
      link: 'gap-3 p-1',
      button: 'p-2',
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        type="button"
        className={twMerge(buttonVariants({ variant, size }), className)}
        {...props}
        ref={ref}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button }
