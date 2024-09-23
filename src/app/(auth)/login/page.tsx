import Image from 'next/image'
import hero from '../../../../public/login/hero.png'
import { Button } from '@/app/components/ui/button'
import { Github } from '@/app/components/assets/github'
import { GoogleLogo } from '@/app/components/assets/google'
import { GuestLogo } from '@/app/components/assets/guest'

export default function SignIn() {
  return (
    <main className="flex items-center justify-between bg-gray-800 text-gray-100 font-default text-base p-5 h-svh">
      <Image
        src={hero}
        width={598}
        height={912}
        className="rounded-md h-full"
        alt=""
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
          <Button variant="default" size="default">
            <GoogleLogo />
            Entrar com Google
          </Button>

          <Button variant="default" size="default">
            <Github />
            Entrar com Github
          </Button>

          <Button variant="default" size="default">
            <GuestLogo />
            Entrar como visitante
          </Button>
        </article>
      </section>
    </main>
  )
}
