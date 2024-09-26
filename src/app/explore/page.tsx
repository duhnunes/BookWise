import { Binoculars } from 'lucide-react'
import { Sidebar } from '../components/sidebar'
import { BookCard } from '../components/Cards/BookCard'
import { Input } from '../components/ui/input'
import { Tags } from '../components/ui/tags'

export default function Home() {
  return (
    <main className="min-h-svh">
      <Sidebar />

      <section className="pr-24 flex flex-col pt-[72px] gap-10 ml-72">
        <div className="flex items-start justify-between">
          <h1 className="inline-flex items-center gap-3 text-gray-100 font-bold text-2xl">
            <Binoculars className="size-5 text-green-100" />
            Explorar
          </h1>
          <Input placeholder="Buscar livro ou autor" />
        </div>

        <div className="flex items-center gap-3">
          <Tags dataState="on">Tudo</Tags>
          <Tags>Computação</Tags>
          <Tags>Educação</Tags>
          <Tags>Fantasia</Tags>
          <Tags>Ficção científica</Tags>
          <Tags>Horror</Tags>
          <Tags>HQs</Tags>
          <Tags>Suspense</Tags>
        </div>

        <div className="grid mx-auto grid-cols-3 gap-5">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </section>
    </main>
  )
}
