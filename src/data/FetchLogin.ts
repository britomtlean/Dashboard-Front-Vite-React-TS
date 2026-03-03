export class FetchLogin {
    private static readonly httpLogin = 'http://localhost:3000/auth/login';
    private static readonly httpGetProfile = 'http://localhost:3000/auth/validate';

    static async send(user: Record<string, string>): Promise<object> {
        const res = await fetch(this.httpLogin, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
            credentials: 'include'
        });

        const data = await res.json();

        if (!res.ok) {
            throw Error(data.message);
        }

        console.log('Dados recebidos:', data);
        return data;
    }

    static async getProfile(): Promise<Record<string, any>> {

        const res = await fetch(this.httpGetProfile, {
            method: 'GET',
            credentials: 'include',
        });
        const data = await res.json();

        if (!res.ok) {
            throw Error(data.message);
        }

        console.log('Usuário logado:', data);
        return data;
    }
}
