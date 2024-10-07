import { Binoculars, Check, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import bookImage from '../../../public/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png'
import { Avatar } from '../../components/avatar'
import { BookCard } from '../../components/Cards/BookCard'
import { Sidebar } from '../../components/Sidebar/MenuBox'
import { StarRating } from '../../components/starrating'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../../components/ui/sheet'
import { Tags } from '../../components/ui/tags'

interface TagData {
  active: 'on' | 'off'
  name: string
}

export default function Home() {
  const tagsName: TagData[] = [
    { active: 'on', name: 'Tudo' },
    { active: 'off', name: 'Computação' },
    { active: 'off', name: 'Educação' },
    { active: 'off', name: 'Fantasia' },
    { active: 'off', name: 'Ficção científica' },
    { active: 'off', name: 'Horror' },
    { active: 'off', name: 'HQs' },
    { active: 'off', name: 'Suspense' },
  ]

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

        <div className="flex items-center gap-3 overflow-x-scroll hidden-scroll cursor-grabbing horizontal-mask">
          {tagsName.map((item) => {
            return (
              <Tags dataState={item.active} key={item.name}>
                {item.name}
              </Tags>
            )
          })}
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
                        <StarRating count={8} />
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
                    <article className="flex flex-col gap-6 p-6 bg-gray-700 rounded-md">
                      <header className="flex items-center justify-between gap-4">
                        <Avatar />
                        <strong className="text-gray-100 font-bold leading-short text-base flex-1">
                          Cristofer Rosser
                        </strong>
                        <StarRating count={6} />
                      </header>
                      <div className="flex flex-col gap-3">
                        <div className="relative">
                          <textarea
                            name="review"
                            id="review"
                            className="bg-gray-800 rounded w-full h-[164px] px-5 py-3 text-gray-200 text-sm placeholder:text-gray-400 resize-none"
                            placeholder="Escreva sua avaliação"
                          />
                          <footer className="absolute bottom-2 right-2">
                            <span className="text-gray-400 text-xs">0</span>
                            <span className="text-gray-400 text-xs">/</span>
                            <span className="text-gray-400 text-xs">450</span>
                          </footer>
                        </div>

                        <div className="flex items-center gap-2 ml-auto">
                          <Button variant="button" size="button">
                            <X className="text-purple-100" />
                          </Button>
                          <Button variant="button" size="button">
                            <Check className="text-green-100" />
                          </Button>
                        </div>
                      </div>
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
                        <StarRating count={7} />
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
                        <StarRating count={10} />
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
                        <StarRating count={4} />
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
