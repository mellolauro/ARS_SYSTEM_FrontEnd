import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { cookies } from "next/headers";

const handler = NextAuth({
    pages: {
        signIn: "/",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                email:{},
                password:{},
            },
            async authorize(credentials) {
                if(!credentials) {
                    return null;
                }

                try {
                    const response = await fetch("http://localhost:3333/api/auth/shared", {
                        method: "POST",
                        body: JSON.stringify({
                            identifier:credentials.email,
                            password: credentials.password,
                        }),
                        headers: { "Content-Type": "application/json"},
                    });
                    if (response.status !==200) return null;
                    const authData = await response.json();
                    if (!authData.jwt || !authData.user) return null;
                    cookies().set("jwt", authData.jwt);
                    return {
                        id: authData.user.id,
                        email: authData.user.email,
                        name: authData.user.name,
                    };
                } catch (e) {
                    return null;
                }
            },
        }),
    ],
});

export {handler as GET, handler as POST}