import { NextResponse } from 'next/server';
import db from '@/lib/db'; 
import { hashSync } from 'bcrypt-ts';

export async function POST(request: Request) {
const { name, email, department, password } = await request.json();


if (!name || !email || !password) {
    return NextResponse.json({ error: 'Os campos nome, email e senha são obrigatórios.' }, { status: 400 });
}

const existingUser = await db.user.findUnique({
    where: { email },
});

if (existingUser) {
    return NextResponse.json({ error: 'Usuário já cadastrado.' }, { status: 400 });
}

const newUser = await db.user.create({
    data: {
    name,
    email,
    department,
    password: hashSync(password, 10), 
    createdAt: new Date(),
    updatedAt: new Date(),
    },
});

return NextResponse.json({ message: 'Usuário criado com sucesso', user: newUser }, { status: 201 });
}