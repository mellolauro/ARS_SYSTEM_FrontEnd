"use server";

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function login(FormData: FormData) {
    const { email, password } = Object.fromEntries(FormData.entries());


    const result = await signIn("credentials", { 
        redirect: false, 
        email, 
        password 
    });
    if (result?.error) {
        
        if (result.error === 'CredentialsSignin') {
        
            throw new Error('Credenciais Inválidas');
        }
        
        throw new Error(result.error);
    }
    
    redirect('/public');
}