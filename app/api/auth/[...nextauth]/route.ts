import axios from 'axios';
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const baseURL = process.env.REACT_APP_BASE_URL;

const authOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                
                return { id: "1", name: "User", email: "user@example.com" }; 
            },
        }),
    ],
};

export const API = axios.create({baseURL})

export async function GET(req: Request) {
    const result = NextAuth(authOptions);
    return result; 
}

export async function POST(req: Request) {
    const result = NextAuth(authOptions);
    return result; 
}