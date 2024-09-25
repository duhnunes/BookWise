import Image from 'next/image'
import logo from '../../../public/logo.svg'
import { Button } from './ui/button'
import { BinocularsIcon, ChartLine, LogIn, LogOut, User2 } from 'lucide-react'
import { Avatar } from './avatar'

export const Sidebar = () => {
  return (
    <aside className="fixed bottom-5 top-5 left-5 rounded-xl bg-gray-700 pt-10 pb-6 overflow-hidden w-[232px]">
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

        <Button variant="link" size="link" className="mx-auto">
          Fazer login
          <LogIn className="text-green-100 size-5" />
        </Button>
        <Button variant="link" size="link" className="mx-auto">
          <Avatar />
          DuH Nunes
          <LogOut className="text-danger size-5" />
        </Button>
      </section>

      <div className="absolute -top-24 rounded-full -left-[140px] size-56 bg-green-300 filter blur-3xl opacity-50 -z-10" />
      <div className="absolute -top-24 rounded-full left-[140px] size-56 bg-purple-200 filter blur-3xl opacity-50 -z-10" />
      <div className="absolute top-[50%] rounded-full left-[140px] size-56 bg-purple-200 filter blur-3xl opacity-50 -z-10" />
      <div className="absolute -bottom-24 rounded-full -left-[140px] size-56 bg-green-200 filter blur-3xl opacity-50 -z-10" />
    </aside>
  )
}
