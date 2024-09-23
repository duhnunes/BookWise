'use client'

import * as React from 'react'
import Image from 'next/image'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, src, ...props }, ref) => {
    return (
      <button
        type="button"
        className="bg-gray-600 text-gray-200 py-5 px-6 rounded-md inline-flex items-center gap-5 hover:brightness-90 select-none"
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
