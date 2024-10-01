'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'

export const Avatar = () => {
  const { data: session } = useSession()
  const userImage = session?.user?.image

  return (
    <figure className="bg-gradient-to-b from-from to-to rounded-full w-10 h-10 p-0.5 overflow-hidden whitespace-nowrap">
      <Image
        src={userImage!}
        width={40}
        height={40}
        alt=""
        className="rounded-full"
      />
    </figure>
  )
}
