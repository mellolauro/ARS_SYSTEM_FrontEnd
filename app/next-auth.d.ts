import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        id:number;
        email: string | null;
        password: string |null;
    }
}