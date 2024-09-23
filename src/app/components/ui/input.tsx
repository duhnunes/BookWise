'use client'

import { Search } from 'lucide-react'
import * as React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', ...props }, ref) => {
    return (
      <div className="group flex items-center gap-2 bg-gray-800 rounded border border-gray-500 pr-5 focus-within:border-green-200">
        <input
          type={type}
          className="flex-1 bg-transparent placeholder:text-gray-400 border-none focus-within:outline-none text-gray-400 pl-5 py-[14px] group-focus-within:caret-green-200"
          ref={ref}
          {...props}
        />
        <Search className="size-5 text-gray-500 group-focus-within:text-green-200" />
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
