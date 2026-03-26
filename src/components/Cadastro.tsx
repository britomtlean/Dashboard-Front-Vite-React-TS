import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type CadastroModel = {
    nome: string;
    cpf: string;
    email: string;
    senha: string;
};

const Cadastro = () => {
    //OBJETO PARA ARMAZENAR DADOS DO CADASTRO
    const [form, setForm] = useState<CadastroModel>({
        nome: '',
        cpf: '',
        email: '',
        senha: '',
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setMessage(null);
        setError(null);

        try {
            const res = await fetch('https://back-end-dashboard-production.up.railway.app/auth/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Erro ao cadastrar');
            }

            setMessage('Usuário cadastrado com sucesso!');
            setForm({ nome: '', cpf: '', email: '', senha: '' });
            navigate('/login');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-500 px-[10vw]">
            <div
                className="w-full max-w-md p-8 rounded-2xl shadow-lg
                 bg-white/10 backdrop-blur-md"
            >
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Cadastro</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome completo"
                        value={form.nome}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 w-full px-4 py-2 shadow-sm
                        focus:outline-none
                        focus:border-2 focus:border-cyan-300
                        transition
                        duration-200"
                        required
                    />

                    <input
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        value={form.cpf}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 w-full px-4 py-2 shadow-sm
                        focus:outline-none
                        focus:border-2 focus:border-cyan-300
                        transition
                        duration-200"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 w-full px-4 py-2 shadow-sm
                        focus:outline-none
                        focus:border-2 focus:border-cyan-300
                        transition
                        duration-200"
                        required
                    />

                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={form.senha}
                        onChange={handleChange}
                        className="p-3 rounded-lg border border-gray-300 w-full px-4 py-2 shadow-sm
                        focus:outline-none
                        focus:border-2 focus:border-cyan-300
                        transition
                        duration-200"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 bg-blue-600 text-white font-semibold py-3 rounded-lg
                        hover:bg-blue-700
                        transition duration-200
                        focus:outline-none
                        focus:ring-2 focus:ring-cyan-500
                        focus:border-white"
                    >
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </form>

                {message && <p className="text-green-600 font-bold text-center mt-4">{message}</p>}

                {error && <p className="text-red-600 font-bold text-center mt-4">{error}</p>}
            </div>
        </div>
    );
};

export default Cadastro;
