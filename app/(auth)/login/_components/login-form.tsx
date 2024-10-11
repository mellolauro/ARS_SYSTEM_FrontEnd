'use client';

import { signIn } from 'next-auth/react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function LoginForm() {
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log('Sending login data:', data); // Verificar se os dados estão corretos

    const result = await signIn("credentials", {
      ...data,
      redirect: true,  // Evita o redirecionamento automático
      callbackUrl: "/dashboard",  // Corrigido o caminho do callback
    });

    console.log('Login result:', result); // Verificar se há algum erro na resposta

    if (result?.error) {
      console.error(result.error);
      // Lide com o erro da maneira desejada (por exemplo, exibir mensagem)
    }

    if (result?.ok) {
      window.location.href = result.url || "/dashboard";  // Redireciona manualmente
    }
  }

  return (
    <Card className="mx-auto max-w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Entre com email e senha</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={login} className="text-left">
          <div className="space-y-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input name="email" type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input
                name="password"
                type="password"
                id="password"
                placeholder="password"
              />
            </div>
          </div>
          <Button size={'lg'} type="submit" className="w-full mt-10">
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <Link
          className={cn(
            buttonVariants({ variant: 'link', size: 'sm' }),
            'mt-2 mx-auto'
          )}
          href="/register"
        >
          Não possui conta?
        </Link>
      </CardFooter>
    </Card>
  );
}
