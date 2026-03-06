export class Task {
    private static readonly httpGetTask =
        window.location.hostname === 'localhost'
            ? 'http://localhost:3000/task/get'
            : 'https://back-end-dashboard-production.up.railway.app/task/get';

    private static readonly httpCreateTask =
        window.location.hostname === 'localhost'
            ? 'http://localhost:3000/task/create'
            : 'https://back-end-dashboard-production.up.railway.app/task/create';

    private static readonly httpDeleteTask =
        window.location.hostname === 'localhost'
            ? 'http://localhost:3000/task/delete/'
            : 'https://back-end-dashboard-production.up.railway.app/task/delete/';

    private static readonly httpUpdateTask =
        window.location.hostname === 'localhost'
            ? 'http://localhost:3000/task/update/'
            : 'https://back-end-dashboard-production.up.railway.app/task/update/';

    static async getTask() {
        const res = await fetch(this.httpGetTask, {
            method: 'GET',
            credentials: 'include',
        });
        const data = await res.json();

        if (!res.ok) {
            throw Error(data.message);
        }

        console.log('Dados recebidos:', data);
        return data;
    }

    static async createTask(task: Record<string, any>) {
        const res = await fetch(this.httpCreateTask, {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            credentials: 'include',
            body: JSON.stringify(task),
        });
        const data = await res.json();

        if (!res.ok) {
            throw Error(data.message);
        }

        console.log('Task criada:', data);
        return data;
    }

    static async deleteTask(id: number) {
        const res = await fetch(`${this.httpDeleteTask + id}`, {
            method: 'DELETE',
            credentials: 'include',
        });
        const data = await res.json();

        if (!res.ok) {
            throw Error(data.message);
        }

        console.log('Task apagada com sucesso!:', data);
        return data;
    }

    static async updateTask(id: number) {
        const res = await fetch(`${this.httpUpdateTask + id}`, {
            method: 'PUT',
            credentials: 'include',
        });
        const data = await res.json();

        if (!res.ok) {
            throw Error(data.message);
        }

        console.log('Task apagada com sucesso!:', data);
        return data;
    }
}
