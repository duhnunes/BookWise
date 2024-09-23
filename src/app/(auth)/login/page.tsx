import Image from 'next/image'
import hero from '../../../../public/login/hero.png'
import googleLogo from '../../../../public/brand/google.svg'
import githubLogo from '../../../../public/brand/github.svg'
import rocket from '../../../../public/login/rocket.svg'

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
          <h1 className="font-bold text-2xl leading-short">Boas vindas!</h1>
          <p className="text-gray-200">
            Faça seu login ou acesso como visitante.
          </p>
        </article>

        <article className="flex flex-col gap-4">
          <button
            type="button"
            className="bg-gray-600 text-gray-200 py-5 px-6 rounded-md inline-flex items-center gap-5 hover:brightness-90"
          >
            <Image src={googleLogo} width={32} height={32} alt="" />
            <span className="text-gray-200 text-lg font-bold">
              Entrar com Google
            </span>
          </button>

          <button
            type="button"
            className="bg-gray-600 text-gray-200 py-5 px-6 rounded-md inline-flex items-center gap-5 hover:brightness-90"
          >
            <Image src={githubLogo} width={32} height={32} alt="" />
            <span className="text-gray-200 text-lg font-bold">
              Entrar com GitHub
            </span>
          </button>

          <button
            type="button"
            className="bg-gray-600 text-gray-200 py-5 px-6 rounded-md inline-flex items-center gap-5 hover:brightness-90"
          >
            <Image src={rocket} width={32} height={32} alt="" />
            <span className="text-gray-200 text-lg font-bold">
              Entrar como visitante
            </span>
          </button>
        </article>
      </section>
    </main>
  )
}
