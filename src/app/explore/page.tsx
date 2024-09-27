import { Binoculars } from 'lucide-react'
import { Sidebar } from '../components/sidebar'
import { BookCard } from '../components/Cards/BookCard'
import { Input } from '../components/ui/input'
import { Tags } from '../components/ui/tags'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/sheet'
import Image from 'next/image'

import bookImage from '../../../public/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png'
import { StarRating } from '../components/starrating'
import Link from 'next/link'
import { Avatar } from '../components/avatar'

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
          <Tags dataState="off">Computação</Tags>
          <Tags dataState="off">Educação</Tags>
          <Tags dataState="off">Fantasia</Tags>
          <Tags dataState="off">Ficção científica</Tags>
          <Tags dataState="off">Horror</Tags>
          <Tags dataState="off">HQs</Tags>
          <Tags dataState="off">Suspense</Tags>
        </div>

        <div className="grid mx-auto grid-cols-3 gap-5">
          <Sheet>
            <SheetTrigger>
              <BookCard />
            </SheetTrigger>
            <SheetContent className="w-[660px] overflow-y-auto">
              <SheetTitle>
                <section className="bg-gray-700 py-8 px-6 flex flex-col gap-10 mb-10 rounded-lg">
                  <div className="flex gap-8">
                    <Image
                      src={bookImage}
                      width={171}
                      height={242}
                      alt=""
                      className="rounded-lg"
                    />

                    <article className="flex flex-col justify-between">
                      <div className="flex flex-col gap-2">
                        <strong className="text-gray-100 font-bold leading-short text-lg">
                          14 Hábitos de Desenvolvedores Altamente Produtivos
                        </strong>
                        <span className="text-gray-300">Zeno Rocha</span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <StarRating />
                        <span className="text-gray-400 text-sm">
                          3 avaliações
                        </span>
                      </div>
                    </article>
                  </div>
                </section>
              </SheetTitle>
              <SheetDescription>
                <section className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200 text-sm">Avaliações</span>
                    <Link href="#">Avaliar</Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <article className="flex flex-col gap-5 p-6 bg-gray-700 rounded-md">
                      <header className="flex items-start justify-between gap-4">
                        <Avatar />
                        <div className="flex flex-col flex-1">
                          <strong className="text-gray-100 font-bold leading-short">
                            Brandon Botosh
                          </strong>
                          <span className="text-gray-400 text-sm">
                            Há 2 dias
                          </span>
                        </div>
                        <StarRating />
                      </header>
                      <p className="text-gray-300 text-sm">
                        Nec tempor nunc in egestas. Euismod nisi eleifend at et
                        in sagittis. Penatibus id vestibulum imperdiet a at
                        imperdiet lectus leo. Sit porta eget nec vitae sit
                        vulputate eget
                      </p>
                    </article>

                    <article className="flex flex-col gap-5 p-6 bg-gray-700 rounded-md">
                      <header className="flex items-start justify-between gap-4">
                        <Avatar />
                        <div className="flex flex-col flex-1">
                          <strong className="text-gray-100 font-bold leading-short">
                            Brandon Botosh
                          </strong>
                          <span className="text-gray-400 text-sm">
                            Há 2 dias
                          </span>
                        </div>
                        <StarRating />
                      </header>
                      <p className="text-gray-300 text-sm">
                        Nec tempor nunc in egestas. Euismod nisi eleifend at et
                        in sagittis. Penatibus id vestibulum imperdiet a at
                        imperdiet lectus leo. Sit porta eget nec vitae sit
                        vulputate eget
                      </p>
                    </article>

                    <article className="flex flex-col gap-5 p-6 bg-gray-700 rounded-md">
                      <header className="flex items-start justify-between gap-4">
                        <Avatar />
                        <div className="flex flex-col flex-1">
                          <strong className="text-gray-100 font-bold leading-short">
                            Brandon Botosh
                          </strong>
                          <span className="text-gray-400 text-sm">
                            Há 2 dias
                          </span>
                        </div>
                        <StarRating />
                      </header>
                      <p className="text-gray-300 text-sm">
                        Nec tempor nunc in egestas. Euismod nisi eleifend at et
                        in sagittis. Penatibus id vestibulum imperdiet a at
                        imperdiet lectus leo. Sit porta eget nec vitae sit
                        vulputate eget
                      </p>
                    </article>
                  </div>
                </section>
              </SheetDescription>
            </SheetContent>
          </Sheet>
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
