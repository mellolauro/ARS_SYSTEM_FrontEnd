import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { Backend_URL } from "@/lib/Constants";
import { JWT } from "next-auth/jwt";

const handler = NextAuth({
    pages: {
        signIn:"../../login/_components/LoginForm",
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
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            });
            if (res.status == 401) {
            console.log(res.statusText);
                return null;
            }
            const user = await res.json();
            return user;
        },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, ...user };

            if (new Date().getTime() < token.backendTokens.expiresIn)
                return token;

            return await refreshToken(token);
        },

        async session({ token, session }) {
            session.user = token.user;
            session.backendTokens = token.backendTokens;

            return session;
        },
    },
    
});

export { handler as GET, handler as POST };

function refreshToken(token: JWT): import("next-auth/jwt").JWT | PromiseLike<import("next-auth/jwt").JWT> {
    throw new Error("Function not implemented.");
}
