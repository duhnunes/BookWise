import Image from 'next/image'
import Link from 'next/link'

import { auth } from '@/auth'

import bookImg from '../../../public/images/books/o-hobbit.png'
import { Avatar } from '../avatar'
import { StarRating } from '../starrating'

export const BookReview = async () => {
  const session = await auth()

  return (
    <section className="flex flex-col gap-y-8 p-6 bg-gray-700 rounded-md">
      <header className="flex items-start justify-between gap-4">
        <Avatar />
        <div className="flex-1 flex flex-col -space-y-1">
          <strong className="text-gray-100 font-bold text-md">
            {session?.user?.name}
          </strong>
          <span className="text-gray-400 text-sm">Hoje</span>
        </div>

        <StarRating count={1} />
      </header>

      <article className="flex items-stretch gap-5">
        <Image
          src={bookImg}
          width={108}
          height={152}
          alt=""
          className="rounded w-full"
        />
        <div className="space-y-5">
          <header className="flex flex-col">
            <strong className="font-bold text-md leading-short text-gray-100">
              O Hobbit
            </strong>
            <span className="text-gray-400 text-sm">J.R.R. Tolkien</span>
          </header>

          <p className="text-gray-300 w-full max-h-88 overflow-ellipsis">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...
            <Link href="#" className="mx-2">
              ver mais
            </Link>
          </p>
        </div>
      </article>
    </section>
  )
}
