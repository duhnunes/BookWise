'use client'

import * as React from 'react'
import Image from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

const buttonVariants = tv({
  base: `inline-flex items-center gap-5 rounded-md select-none hover:brightness-90`,

  variants: {
    variant: {
      default: `bg-gray-600 text-gray-200`,
    },

    size: {
      default: `py-5 px-6`,
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  src: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, src, children, ...props }, ref) => {
    return (
      <button
        type="button"
        className={twMerge(buttonVariants({ variant, size }), className)}
        {...props}
        ref={ref}
      >
        <Image
          src={src}
          width={32}
          height={32}
          alt=""
          className="pointer-events-none"
        />
        <span className="text-gray-200 text-lg font-bold">{children}</span>
      </button>
    )
  },
)

Button.displayName = 'Button'
