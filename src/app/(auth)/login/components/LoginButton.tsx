'use client'

import { signIn } from 'next-auth/react'
import * as React from 'react'

import { Button } from '@/app/components/ui/button'

interface LoginButtonProps {
  provider: string
  icon: React.ElementType
}

export function LoginButton({ provider, icon: Icon }: LoginButtonProps) {
  return (
    <Button
      variant="default"
      size="default"
      onClick={() => signIn(`'${provider}'`)}
    >
      <Icon />
      <p>
        Entrar com <span className="capitalize">{provider}</span>
      </p>
    </Button>
  )
}
