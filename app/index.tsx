import { useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState<any>(null);

    const fetchUser = async () => {
    const response = await fetch(`/api/getUser?email=${email}`);
    const data = await response.json();
    setUser(data);
    };

    return (
    <div>
        <h1>Buscar Usuário por E-mail</h1>
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite o e-mail do usuário"
        />
        <button onClick={fetchUser}>Buscar Usuário</button>
        {user && (
        <div>
            <h2>Informações do Usuário:</h2>
            <p>Nome: {user.name}</p>
            <p>E-mail: {user.email}</p>
        </div>
        )}
    </div>
    );
}
