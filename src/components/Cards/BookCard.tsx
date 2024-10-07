import Image from 'next/image'

import book from '../../../public/images/books/Book.png'
import { StarRating } from '../starrating'

export const BookCard = () => {
  return (
    <section className="flex gap-5 bg-gray-700 px-5 py-4">
      <Image src={book} width={64} height={94} alt="" className="rounded" />

      <article className="flex flex-col justify-between">
        <div className="flex flex-col">
          <strong className="text-gray-100 font-bold text-md">
            A revolução dos bichos
          </strong>
          <span className="text-gray-400 font-bold text-sm">George Orwell</span>
        </div>

        <StarRating count={3} />
      </article>
    </section>
  )
}
