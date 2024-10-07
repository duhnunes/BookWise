import Image from 'next/image'

import bookImg from '../../../public/images/books/o-hobbit.png'
import { StarRating } from '../starrating'

export const LastBook = () => {
  return (
    <section className="flex flex-col gap-y-8 px-6 py-5 bg-gray-600 rounded-md">
      <article className="flex items-stretch gap-5">
        <Image
          src={bookImg}
          width={108}
          height={152}
          alt=""
          className="rounded max-w-[108px] max-h-[152px]"
        />
        <div className="flex flex-col justify-between">
          <header className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex-1 flex flex-col -space-y-1">
                <span className="text-gray-400 text-sm">Há 2 dias</span>
              </div>

              <StarRating count={0} />
            </div>
            <strong className="font-bold text-md leading-short text-gray-100">
              O Hobbit
            </strong>
            <span className="text-gray-400 text-sm">J.R.R. Tolkien</span>
          </header>

          <p className="text-gray-300 w-full max-h-12 overflow-hidden">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras...
          </p>
        </div>
      </article>
    </section>
  )
}
