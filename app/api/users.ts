import { NextResponse } from 'next/server';
import db from '../../lib/db'; 
import { hash } from 'bcrypt-ts'; 

// Tipagem para o corpo da requisição (opcional, mas recomendado)
interface UserRequestBody {
name: string;
email: string;
department: string;
password: string;
}

export async function POST(request: Request) {
try {
    
    const { name, email, department, password }: UserRequestBody = await request.json();

    
    if (!name || !email || !password) {
    return NextResponse.json(
        { error: 'Os campos nome, email e senha são obrigatórios.' },
        { status: 400 }
    );
    }

    
    const existingUser = await db.user.findUnique({
    where: { email },
    });

    if (existingUser) {
    return NextResponse.json({ error: 'Usuário já cadastrado.' }, { status: 400 });
    }
    const hashedPassword = await hash(password, 10);
    
    const newUser = await db.user.create({
    data: {
        name,
        email,
        department,
        password: hashedPassword, 
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    });
    return NextResponse.json({ message: 'Usuário criado com sucesso', user: newUser }, { status: 201 });
} catch (error) {
    console.error('Erro ao criar usuário:', error);
    return NextResponse.json({ error: 'Erro ao criar usuário.' }, { status: 500 });
}
}
