import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        token?: string; // Adiciona a propriedade token ao tipo User
    }

    interface Session {
        accessToken?: string; // Adiciona a propriedade accessToken ao tipo Session
    }
}