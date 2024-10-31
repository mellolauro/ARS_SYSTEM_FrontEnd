'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserIcon } from './user-icon';
import Link from 'next/link';
import { cn } from '../../../../lib/utils';
import { useState } from 'react';
import axios from 'axios';

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); 
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const department = formData.get('department') as string;
    const password = formData.get('password') as string;
    
    try {
      const response = await axios.post('http://localhost:3333/auth/register', {
        name,
        email,
        department,
        password,
      });

      setLoading(false);
      alert('Usuário registrado com sucesso!');
      window.location.href = '/login';
    } catch (error) {
      setError('Erro ao registrar usuário. Por favor, tente novamente.');
      setLoading(false);
    }
  };

  return (
    <>
      <Card className="mx-auto max-w-96">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2">
            <UserIcon className="w-6 h-6" />
            Cadastre-se
          </CardTitle>
          <CardDescription>Crie sua conta</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="text-left ">
            <div className="space-y-6">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input name="name" type="text" id="name" placeholder="Nome" required />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input name="email" type="email" id="email" placeholder="email@exemplo.com" required />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="department">Departamento</Label>
                <Input name="department" type="text" id="department" placeholder="" required />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input name="password" type="password" id="password" placeholder="********" required />
              </div>
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <Button size={'lg'} type="submit" className="w-full mt-10 " disabled={loading}>
              {loading ? 'Registrando...' : 'Registrar'}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <Link
            className={cn(
              buttonVariants({ variant: 'link', size: 'sm' }),
              'mt-2 mx-auto'
            )}
            href="/login"
          >
            Já possui conta?
          </Link>
        </CardFooter>
      </Card>
      <Link
        className={cn(buttonVariants({ variant: 'link', size: 'lg' }), 'mt-8')}
        href="/"
      >
        Voltar para Home
      </Link>
    </>
  );
}