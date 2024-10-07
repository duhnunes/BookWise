import Image from 'next/image'

import bookImg from '../../../../public/images/books/o-hobbit.png'
import { StarRating } from '../starrating'

export const UserBookReview = () => {
  return (
    <section className="flex flex-col gap-y-8 p-6 bg-gray-700 rounded-md">
      <article className="flex gap-6">
        <Image
          src={bookImg}
          width={98}
          height={132}
          alt=""
          className="rounded"
        />
        <div className="flex flex-col justify-between">
          <header className="flex flex-col">
            <strong className="font-bold text-lg leading-short text-gray-100">
              O Hobbit
            </strong>
            <span className="text-gray-400 text-sm leading-base">
              J.R.R. Tolkien
            </span>
          </header>
          <StarRating count={0} />
        </div>
      </article>
      <p className="text-gray-300 w-full max-h-88 overflow-ellipsis">
        Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean
        posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet
        libero pharetra nunc elementum fringilla velit ipsum. Sapiente possimus,
        qui minima nulla, facilis blanditiis eveniet voluptates doloribus velit
        quis architecto molestiae similique nostrum nemo quae quibusdam animi.
      </p>
    </section>
  )
}
