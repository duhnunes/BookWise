import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const BookReview = () => {
  return (
    <section className="flex flex-col gap-y-8 p-6 bg-gray-700 rounded-md">
      <header className="flex items-start justify-between gap-4">
        <figure className="bg-gradient-to-b from-from to-to rounded-full w-10 h-10 p-0.5 overflow-hidden">
          <Image
            src="https://github.com/duhnunes.png"
            width={40}
            height={40}
            alt=""
            className="rounded-full"
          />
        </figure>
        <div className="flex-1 flex flex-col -space-y-1">
          <strong className="text-gray-100 font-bold text-md">DuH Nunes</strong>
          <span className="text-gray-400 text-sm">Hoje</span>
        </div>

        <section className="inline-flex items-center">
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100 fill-current" />
          <Star className="size-4 text-purple-100" />
        </section>
      </header>

      <article className="flex items-stretch gap-5">
        <Image
          src="https://github.com/duhnunes.png"
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
