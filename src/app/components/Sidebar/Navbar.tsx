import { BinocularsIcon, ChartLine, User2 } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { Button } from '../ui/button'

export function NavbarMenu() {
  const { data: session } = useSession()
  const router = useRouter()
  const currentPage = usePathname()

  function handleHome() {
    router.push('/')
  }
  function handleExplore() {
    router.push('/explore')
  }
  function handlePerfil() {
    router.push('/profile')
  }

  console.log('pathName', currentPage)

  return (
    <nav className="flex-1 mx-auto">
      <ul className="flex flex-col gap-4 text-gray-400 relative">
        <li className="inline-flex items-center">
          {currentPage === '/' && (
            <div className="bg-gradient-to-b from-from to-to w-1 h-6 -left-4 absolute rounded-full" />
          )}
          <Button
            variant="link"
            size="link"
            className={currentPage === '/' ? 'text-gray-200 ml-1' : undefined}
            onClick={handleHome}
          >
            <ChartLine className="size-5" />
            Início
          </Button>
        </li>
        <li className="inline-flex items-center" onClick={handleExplore}>
          {currentPage === '/explore' && (
            <div className="bg-gradient-to-b from-from to-to w-1 h-6 -left-4 absolute rounded-full" />
          )}
          <Button
            variant="link"
            size="link"
            className={
              currentPage === '/explore' ? 'text-gray-200 ml-1' : undefined
            }
          >
            <BinocularsIcon className="size-5" />
            Explorar
          </Button>
        </li>
        {session && (
          <li className="inline-flex items-center" onClick={handlePerfil}>
            {currentPage === '/profile' && (
              <div className="bg-gradient-to-b from-from to-to w-1 h-6 -left-4 absolute rounded-full" />
            )}
            <Button
              variant="link"
              size="link"
              className={
                currentPage === '/profile' ? 'text-gray-200 ml-1' : undefined
              }
            >
              <User2 className="size-5" />
              Perfil
            </Button>
          </li>
        )}
      </ul>
    </nav>
  )
}
