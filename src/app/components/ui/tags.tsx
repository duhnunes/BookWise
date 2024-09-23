import * as React from 'react'

interface TagsProps {
  children: React.ReactNode
}

export const Tags = ({ children }: TagsProps) => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center py-1 px-4 rounded-full whitespace-nowrap border border-purple-100 text-purple-100 text-md cursor-pointer hover:bg-purple-200 hover:text-white focus:bg-purple-200 focus:text-white focus:border-purple-200 transition-all"
    >
      {children}
    </button>
  )
}

Tags.displayName = 'Tags'
