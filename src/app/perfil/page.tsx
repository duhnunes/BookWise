import {
  Bookmark,
  BookOpen,
  BookUser,
  ChevronLeft,
  LibraryBig,
  User2,
} from 'lucide-react'
import { Sidebar } from '../components/sidebar'
import { Input } from '../components/ui/input'
import { UserBookReview } from '../components/Cards/UserBootReview'
import { Avatar } from '../components/avatar'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <main className="min-h-svh">
      <Sidebar />

      <section className="pr-24 flex flex-col pt-[72px] gap-10 ml-72">
        <Button variant="link" size="link">
          <ChevronLeft className="size-4 text-gray-100" />
          Voltar
        </Button>
        <h1 className="inline-flex items-center gap-3 text-gray-100 font-bold text-2xl">
          <User2 className="size-5 text-green-100" />
          Perfil
        </h1>

        <section className="flex items-start gap-x-16">
          <div className="space-y-6">
            <article className="flex flex-col gap-4 max-w-[608px]">
              <Input type="text" placeholder="Buscar livro avaliado" />
            </article>

            <article className="max-w-[608px] space-y-4">
              <span className="text-gray-100 text-sm">Há 2 dias</span>

              <UserBookReview />
            </article>

            <article className="max-w-[608px] space-y-4">
              <span className="text-gray-100 text-sm">Há 4 meses</span>

              <UserBookReview />
            </article>

            <article className="max-w-[608px] space-y-4">
              <span className="text-gray-100 text-sm">Há 6 meses</span>

              <UserBookReview />
            </article>
          </div>

          <div className="w-[324px] flex flex-col gap-8 items-center">
            <div className="flex flex-col items-center gap-5">
              <Avatar />
              <div className="flex flex-col items-center">
                <strong className="text-gray-100 font-bold leading-short text-xl">
                  DuH Nunes
                </strong>
                <span className="text-gray-400 text-sm">membro desde 2019</span>
              </div>
            </div>

            <div className="w-8 h-1 bg-gradient-to-r from-from to-to rounded-full" />

            <div className="flex flex-col gap-10 py-5 px-14">
              <section className="flex items-center gap-5">
                <BookOpen className="text-green-100 size-8" />
                <article className="flex flex-col">
                  <strong className="text-gray-200 font-bold leading-short">
                    3853
                  </strong>
                  <span className="text-gray-300 text-sm">Páginas lidas</span>
                </article>
              </section>

              <section className="flex items-center gap-5">
                <LibraryBig className="text-green-100 size-8" />
                <article className="flex flex-col">
                  <strong className="text-gray-200 font-bold leading-short">
                    10
                  </strong>
                  <span className="text-gray-300 text-sm">
                    Livros avaliados
                  </span>
                </article>
              </section>

              <section className="flex items-center gap-5">
                <BookUser className="text-green-100 size-8" />
                <article className="flex flex-col">
                  <strong className="text-gray-200 font-bold leading-short">
                    8
                  </strong>
                  <span className="text-gray-300 text-sm">Autores lidos</span>
                </article>
              </section>

              <section className="flex items-center gap-5">
                <Bookmark className="text-green-100 size-8" />
                <article className="flex flex-col">
                  <strong className="text-gray-200 font-bold leading-short">
                    Computação
                  </strong>
                  <span className="text-gray-300 text-sm">
                    Categoria mais lida
                  </span>
                </article>
              </section>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
