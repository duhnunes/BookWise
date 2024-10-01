'use client'

import { BinocularsIcon, ChartLine, LogIn, LogOut, User2 } from 'lucide-react'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'

import logo from '../../../public/logo.svg'
import { Github } from './assets/github'
import { GoogleLogo } from './assets/google'
import { Avatar } from './avatar'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

export const Sidebar = () => {
  const { data: session } = useSession()

  return (
    <aside className="fixed bottom-5 top-5 left-5 rounded-xl bg-gray-700 pt-10 pb-6 overflow-hidden w-[14.5rem]">
      <section className="flex flex-col h-full">
        <Image
          src={logo}
          width={128}
          height={32}
          className="mb-16 mx-auto pointer-events-none"
          alt=""
        />
        <nav className="flex-1 mx-auto">
          <ul className="flex flex-col gap-4 text-gray-400 relative">
            <li className="inline-flex items-center text-gray-100">
              <div className="bg-gradient-to-b from-from to-to w-1 h-6 -left-4 absolute rounded-full" />
              <Button variant="link" size="link">
                <ChartLine className="size-5" />
                Início
              </Button>
            </li>
            <li className="inline-flex items-center">
              <Button variant="link" size="link">
                <BinocularsIcon className="size-5" />
                Explorar
              </Button>
            </li>
            <li className="inline-flex items-center">
              <Button variant="link" size="link">
                <User2 className="size-5" />
                Perfil
              </Button>
            </li>
          </ul>
        </nav>

        {!session ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" size="link" className="mx-auto">
                Fazer login
                <LogIn className="text-green-100 size-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center text-gray-200 font-bold leading-short text-md">
                  Faça login para deixar sua avaliação
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <Button onClick={() => signIn('google')}>
                  <GoogleLogo />
                  <span className="text-gray-200 text-lg font-bold">
                    Entrar com Google
                  </span>
                </Button>
                <Button onClick={() => signIn('github')}>
                  <Github />
                  <span className="text-gray-200 text-lg font-bold">
                    Entrar com Github
                  </span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ) : (
          <Button
            variant="link"
            size="link"
            className="mx-auto"
            onClick={() => signOut()}
          >
            <Avatar />
            {session?.user?.name}
            <LogOut className="text-danger size-5" />
          </Button>
        )}
      </section>

      <div className="absolute -top-24 rounded-full -left-[140px] size-56 bg-green-300 filter blur-3xl opacity-50 -z-10" />
      <div className="absolute -top-24 rounded-full left-[140px] size-56 bg-purple-200 filter blur-3xl opacity-50 -z-10" />
      <div className="absolute top-[50%] rounded-full left-[140px] size-56 bg-purple-200 filter blur-3xl opacity-50 -z-10" />
      <div className="absolute -bottom-24 rounded-full -left-[140px] size-56 bg-green-200 filter blur-3xl opacity-50 -z-10" />
    </aside>
  )
}
