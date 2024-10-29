import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Backend_URL } from "@/lib/Constants";
import { JWT } from "next-auth/jwt";

const handler = NextAuth({
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/logout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: '/dashboard',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const {email, password} = credentials ?? {};

                if (!email || !password) return null;

                const res = await fetch(`${Backend_URL}/auth/login`, {
                    method: "POST",
                    body: JSON.stringify({email, password}), // Envie diretamente as credenciais
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                const user = await res.json();
                console.log('Response from backend:', user); // Log da resposta

                if (res.ok && user.accessToken) { // Corrigido para 'accessToken'
                    return { ...user, token: user.accessToken }; // Retorna o usuário e o token
                }

                console.log('Login failed', user); // Log do erro
                return null; // Retorna null se o login falhar
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.token; // Adiciona o accessToken ao token JWT do NextAuth
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = (token as {accessToken?: string}).accessToken; // Adiciona o accessToken na sessão
            return session;
        },
    },
});

export { handler as GET, handler as POST };
