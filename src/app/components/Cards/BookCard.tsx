import { Star } from 'lucide-react'
import Image from 'next/image'

export const BookCard = () => {
  return (
    <section className="flex gap-5 bg-gray-700 px-5 py-4">
      <Image
        src="https://github.com/duhnunes.png"
        width={64}
        height={94}
        alt=""
        className="rounded"
      />

      <article className="flex flex-col justify-between">
        <div className="">
          <strong className="text-gray-100 font-bold text-md">
            A revolução dos bichos
          </strong>
          <span className="text-gray-400 font-bold text-sm">George Orwell</span>
        </div>

        <section className="inline-flex items-center">
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100" />
        </section>
      </article>
    </section>
  )
}
