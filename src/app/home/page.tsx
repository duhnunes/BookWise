import { ChartLine, ChevronRight } from 'lucide-react'
import { Sidebar } from '../components/sidebar'
import { BookReview } from '../components/Cards/BookReview'
import Link from 'next/link'
import { BookCard } from '../components/Cards/BookCard'
import { LastBook } from '../components/Cards/LastBook'

export default function Home() {
  return (
    <main className="min-h-svh">
      <Sidebar />

      <section className="pr-24 flex flex-col pt-[72px] gap-10 ml-72">
        <h1 className="inline-flex items-center gap-3 text-gray-100 font-bold text-2xl">
          <ChartLine className="size-5 text-green-100" />
          Início
        </h1>

        <section className="flex items-start gap-x-16">
          <div className="space-y-6">
            <article className="flex flex-col gap-4 max-w-[608px]">
              <div className="flex items-center justify-between">
                <span className="text-gray-100 text-sm">
                  Sua última leitura
                </span>
                <Link href="#" className="flex items-center gap-2">
                  Ver todos
                  <ChevronRight className="size-4" />
                </Link>
              </div>
              <LastBook />
            </article>

            <article className="max-w-[608px] space-y-4">
              <span className="text-gray-100 text-sm">
                Avaliações mais recentes
              </span>

              <div className="flex flex-col gap-3">
                <BookReview />
                <BookReview />
                <BookReview />
              </div>
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
