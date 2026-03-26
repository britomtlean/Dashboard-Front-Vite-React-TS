import { getToken } from '../services/functions';
import type { TrainingBody } from '../types/Training';

export class Training {
    private static readonly urlGetTarefa: string =
        window.location.hostname === 'localhost'
            ? 'http://localhost:3000/training/getday'
            : 'https://back-end-dashboard-production.up.railway.app/training/getday';

    private static readonly urlAddExercise: string = `${import.meta.env.VITE_API_URL}training/add`;

    static async allTrainings() {
        const token = await getToken();

        const res = await fetch(this.urlGetTarefa, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message);
        }

        console.log('Treinos recebidos:', data);
        return data;
    }

    static async createTraining(training: TrainingBody) {
        const req = JSON.stringify(training);
        console.log('Requisição:', req);

        if (!req) {
            throw new Error('Erro ao enviar Requisição');
        }

        const token = await getToken();

        const res = await fetch('http://localhost:3000/training/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
            body: req,
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message);
        }

        console.log('Response createTraining:', data);
        return data;
    }

    //////////////////////////////// RECEBER MUSCULOS PARA TREINOS //////////////////////////////////////////
    static async getMuscuslos() {
        const token = await getToken();

        const res = await fetch('http://localhost:3000/training/getTypes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Erro ao buscar músculos');
        }

        console.log('response getMuscuslos:', data);
        return data;
    }

    /////////////////////////////////// RECEBER EXERCICIOS POR MUSCULOS ////////////////////////////////////////
    static async getExercices() {
        const token = await getToken();

        const res = await fetch('http://localhost:3000/training/getExercises', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Erro ao buscar músculos');
        }

        console.log('response getExercices:', data);
        return data;
    }

    ////////////////////////////////////// ADICIONAR EXERCICIOS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    static async addExercices(exercise: Record<string, any>){
        const req = JSON.stringify(exercise);
        console.log('Dados da requisição:', req);

        const token = await getToken();

          const res = await fetch(this.urlAddExercise, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${JSON.parse(token)}`,
              },
              body: req
          });

          const data = await res.json();

          if (!res.ok) {
              throw new Error(data.message || 'Erro de serviço');
          }

          console.log('Response addExercices:', data);
          return data;
    }
}
