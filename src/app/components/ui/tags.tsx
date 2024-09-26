'use client'

import * as React from 'react'

interface TagsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  dataState: 'on' | 'off'
}

export const Tags = ({ children, dataState }: TagsProps) => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center py-1 px-4 rounded-full whitespace-nowrap border border-purple-100 text-purple-100 text-md cursor-pointer hover:bg-purple-200 hover:text-white data-[state=on]:bg-purple-200 data-[state=on]:text-white data-[state=on]:border-purple-200 transition-all"
      data-state={dataState}
    >
      {children}
    </button>
  )
}

Tags.displayName = 'Tags'
