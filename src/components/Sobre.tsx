export default function Sobre() {
    return (
        <section className="min-h-screen bg-slate-950 text-white px-6 py-12 rounded-lg m-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-sky-400">Dashboard Full Stack</h1>

                <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
                    Esta aplicação foi desenvolvida com o objetivo de praticar conceitos modernos de desenvolvimento
                    Full Stack, utilizando arquitetura separada entre Front-End, Back-End e Banco de Dados, com
                    autenticação segura, containerização e deploy em cloud.
                </p>

                {/* BACK-END */}

                <div className="bg-slate-900 rounded-xl p-6 mb-8 shadow-lg border border-slate-800">
                    <h2 className="text-2xl font-semibold text-green-400 mb-4">Back-end</h2>

                    <p className="text-gray-300 mb-4">
                        O back-end foi desenvolvido utilizando Node.js com o framework NestJS, seguindo boas práticas de
                        arquitetura e segurança.
                    </p>

                    <ul className="grid md:grid-cols-2 gap-2 text-gray-300 list-disc list-inside">
                        <li>Node.js</li>
                        <li>NestJS</li>
                        <li>Prisma ORM</li>
                        <li>MySQL</li>
                        <li>Autenticação JWT</li>
                        <li>Criptografia de senhas</li>
                        <li>CRUD completo</li>
                        <li>Middlewares para proteção de rotas</li>
                        <li>Testes de API com Insomnia</li>
                        <li>Containerização com Docker</li>
                    </ul>

                    <a
                        href="https://github.com/britomtlean/Dashboard-Back-Nest-Prisma-MySQL"
                        target="_blank"
                        className="inline-block mt-4 text-sky-400 hover:underline"
                    >
                        Ver repositório do Back-end
                    </a>
                </div>

                {/* FRONT-END */}

                <div className="bg-slate-900 rounded-xl p-6 mb-8 shadow-lg border border-slate-800">
                    <h2 className="text-2xl font-semibold text-purple-400 mb-4">Front-end</h2>

                    <p className="text-gray-300 mb-4">
                        O front-end foi desenvolvido como uma Single Page Application (SPA) utilizando React com
                        TypeScript, garantindo tipagem e melhor organização do código.
                    </p>

                    <ul className="grid md:grid-cols-2 gap-2 text-gray-300 list-disc list-inside">
                        <li>Vite</li>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>TailwindCSS</li>
                        <li>React Router</li>
                        <li>Fetch para comunicação com API</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 text-sky-400">Conceitos do React utilizados</h3>

                    <ul className="list-disc list-inside text-gray-300">
                        <li>useState</li>
                        <li>useEffect</li>
                        <li>useRef</li>
                        <li>useContext (gerenciamento de estado global)</li>
                    </ul>

                    <p className="mt-4 text-gray-300">
                        A interface foi projetada utilizando TailwindCSS com foco em responsividade para dispositivos
                        móveis e desktop.
                    </p>

                    <a
                        href="https://github.com/britomtlean/Dashboard-Front-Vite-React-TS"
                        target="_blank"
                        className="inline-block mt-4 text-sky-400 hover:underline"
                    >
                        Ver repositório do Front-end
                    </a>
                </div>

                {/* BANCO */}

                <div className="bg-slate-900 rounded-xl p-6 mb-8 shadow-lg border border-slate-800">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Banco de Dados</h2>

                    <ul className="text-gray-300 list-disc list-inside">
                        <li>MySQL</li>
                        <li>Prisma ORM para modelagem e queries</li>
                        <li>Migrations controladas</li>
                        <li>Relacionamento entre tabelas</li>
                    </ul>
                </div>

                {/* DEPLOY */}

                <div className="bg-slate-900 rounded-xl p-6 shadow-lg border border-slate-800">
                    <h2 className="text-2xl font-semibold text-blue-400 mb-4">Deploy</h2>

                    <p className="text-gray-300 mb-3">
                        O deploy da aplicação foi realizado utilizando integração com repositórios no GitHub e a
                        plataforma Railway.
                    </p>

                    <ul className="text-gray-300 list-disc list-inside">
                        <li>Versionamento com Git e GitHub</li>
                        <li>Deploy automático com Railway</li>
                        <li>Build automatizado da aplicação</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
