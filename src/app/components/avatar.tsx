import Image from 'next/image'

export const Avatar = () => {
  return (
    <figure className="bg-gradient-to-b from-from to-to rounded-full w-10 h-10 p-0.5 overflow-hidden whitespace-nowrap">
      <Image
        src="https://github.com/duhnunes.png"
        width={40}
        height={40}
        alt=""
        className="rounded-full"
      />
    </figure>
  )
}
