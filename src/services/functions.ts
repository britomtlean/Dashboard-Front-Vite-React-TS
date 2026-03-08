
export async function getToken(): Promise<string> {
    const token: string | null = await localStorage.getItem('token');

    if(!token){
        throw Error('Acesso Negado!')
    }
    
    return token;
}
