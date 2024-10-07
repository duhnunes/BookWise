import Image from 'next/image'
import Link from 'next/link'

import { Github } from '@/components/assets/github'
import { GoogleLogo } from '@/components/assets/google'
import { GuestLogo } from '@/components/assets/guest'
import { Button } from '@/components/ui/button'

import hero from '../../../../public/images/login/hero.png'
import { LoginButton } from './components/LoginButton'

export default function SignIn() {
  return (
    <main className="flex items-center justify-between h-svh">
      <Image
        src={hero}
        width={598}
        height={912}
        className="rounded-md h-full"
        alt=""
        priority
      />

      <section className="flex flex-col items-center justify-center gap-10 mx-auto">
        <article className="flex flex-col gap-0.5">
          <strong className="font-bold text-2xl leading-short">
            Boas vindas!
          </strong>
          <p className="text-gray-200">
            Faça seu login ou acesso como visitante.
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <LoginButton provider="google" icon={GoogleLogo} />

          <LoginButton provider="github" icon={Github} />

          <Link href="/">
            <Button variant="default" size="default">
              <GuestLogo />
              Entrar como Visitante
            </Button>
          </Link>
        </article>
      </section>
    </main>
  )
}
