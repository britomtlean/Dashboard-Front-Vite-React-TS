export class Task {
    private static readonly httpGetTask = 'http://localhost:3000/task/get';

    static async getTask(){

        const res = await fetch(this.httpGetTask, {
            method: 'GET',
            credentials: 'include',
        });
        const data = await res.json();

        if(!res.ok){
            throw Error(data.message)
        }

        console.log('Dados recebidos:',data)
        return data
    }
}
