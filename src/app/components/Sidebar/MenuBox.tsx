'use client'

import { LogIn, LogOut } from 'lucide-react'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'

import logo from '../../../../public/logo.svg'
import { Github } from '../assets/github'
import { GoogleLogo } from '../assets/google'
import { Avatar } from '../avatar'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { NavbarMenu } from './Navbar'

export const Sidebar = () => {
  const { data: session } = useSession()

  function handleConnectGoogle() {
    signIn('google')
  }
  function handleConnectGithub() {
    signIn('github')
  }

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
        <NavbarMenu />

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
                <Button onClick={handleConnectGoogle}>
                  <GoogleLogo />
                  <span className="text-gray-200 text-lg font-bold">
                    Entrar com Google
                  </span>
                </Button>
                <Button onClick={handleConnectGithub}>
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
            {session.user?.name}
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
