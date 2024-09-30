import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/lib/db'
import { compareSync } from 'bcrypt-ts'

export const {
    handlers: {GET, POST},
    auth,
    signIn
} = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                email:{
                    label: 'email',
                    type: 'text',
                },

                password:{
                    label: 'password',
                    type: 'password'
                },
            },

        async authorize(credentials, req) {
            const email = credentials.email as string
            const password = credentials.password as string
            
            if(!email || !password){
                return null;
            }
            
            const user = await db.user.findUnique({
                where: {
                    email: email
                }
            });

            if(!user) {
                return null;
            } 

            const matches = compareSync(password, user.password  ??'' ) 
            
            if(matches) {
                return {id: String(user.id), name: user.name, email: user.email}
            }
            return null;
        },
    
    }),
],
});