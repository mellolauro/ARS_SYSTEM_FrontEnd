'use client'; 

import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
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
  const { data: session } = useSession();
  const router = useRouter(); 

  useEffect(() => {
    // Redireciona com base no perfil assim que o usuário está logado
    if (session) {
      const perfil = session.user.perfil;

      const currentPath = window.location.pathname;
      if (currentPath !== '/login') {
        if (perfil === "admin") {
          router.push("/dashboard"); 
        } else {
          router.push("/public");
        }
      }
    }
  }, [session, router]);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const result = await signIn('credentials', {
      ...data,
      redirect: false, // Impede redirecionamento automático
    });

    if (result?.error) {
      console.error("Erro ao autenticar:", result.error);
    } else {
      router.push("/public");
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