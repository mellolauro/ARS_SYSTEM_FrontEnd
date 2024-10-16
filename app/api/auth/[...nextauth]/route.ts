import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { Backend_URL } from "@/lib/Constants";
import { JWT } from "next-auth/jwt";

const handler = NextAuth({
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/logout',
        error: '/auth/error', // Erro na autenticação
        verifyRequest: '/auth/verify-request',
        newUser: '/dashboard', // Redirecionar para a dashboard após o login
    },
    
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
            email: { label: "email", type: "email" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            if (!credentials?.email || !credentials?.password) return null;
            const { email, password } = credentials;
            const res = await fetch(Backend_URL + "/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {'Content-Type': 'application/json'},
            });

            const data = await res.json();
            
            if (res.ok && data.access_token) {
            return { ...data, token: data.access_token };
            }
            
            return null; // Retorna null se o login falhar
        }
        })
    ],
    });
            
export { handler as GET, handler as POST };

function refreshToken(token: JWT): import("next-auth/jwt").JWT | PromiseLike<import("next-auth/jwt").JWT> {
    throw new Error("Function not implemented.");
}
