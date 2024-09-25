import { ChartLine, ChevronRight } from 'lucide-react'
import { Sidebar } from '../components/sidebar'
import { BookReview } from '../components/Cards/BookReview'
import Link from 'next/link'
import { BookCard } from '../components/Cards/BookCard'

export default function Home() {
  return (
    <main className="min-h-svh grid grid-cols-12">
      <Sidebar />
      <section className="pr-24 flex flex-col mt-[72px] gap-10 col-span-4 col-start-4 col-end-13">
        <h1 className="inline-flex items-center gap-3 text-gray-100 font-bold text-2xl">
          <ChartLine className="size-5 text-green-100" />
          Início
        </h1>

        <section className="flex items-start gap-x-16">
          <div className="w-[608px] space-y-4">
            <span className="text-gray-100 text-sm">
              Avaliações mais recentes
            </span>

            <article className="flex flex-col gap-3">
              <BookReview />
              <BookReview />
              <BookReview />
            </article>
          </div>

          <div className="w-[324px] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-100 text-sm">Livros populares</span>
              <Link href="#" className="flex items-center gap-2">
                Ver todos
                <ChevronRight className="size-4" />
              </Link>
            </div>

            <article className="flex flex-col gap-3">
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
            </article>
          </div>
        </section>
      </section>
    </main>
  )
}
