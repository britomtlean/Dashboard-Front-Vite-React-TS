import { useRef } from 'react';
import type { TrainingBody } from '../../types/Training';
import { Training } from '../../data/Training';
import { DiaSemana } from '../../types/EnumDiaSemana'
import useTraining from '../../hooks/useTraining';

const CreateTreino = () => {

     const { musculos, exercises, dados } = useTraining();


    const valueMusculo = useRef<HTMLSelectElement | null>(null);
    const valueDia = useRef<HTMLSelectElement | null>(null);


    const handleCreateTrainningBody = () => {
        if (!valueMusculo.current || !valueDia.current) {
            return
        }

        if (!valueMusculo.current!.value || !valueDia.current!.value) {
            alert('Dados inválidos!');
            return
        }

        const newTraining: TrainingBody = {
            diaSemana: Number(valueDia.current?.value),
            musculo: Number(valueMusculo.current?.value),
        };

        console.log('Treino criado:', newTraining);
        Training.createTraining(newTraining)
            .then(() => console.log('ok'))
            .catch((err) => alert(err));
    };

    return (
        <div className="flex flex-col gap-2 justify-center items text-left w-full">
            <h1>Dia da semana</h1>
            <select ref={valueDia} className="bg-white p-2" required>
                <option value="">Selecione um dia:</option>

                <option value={DiaSemana.Domingo}>Domingo</option>
                <option value={DiaSemana.Segunda}>Segunda-feira</option>
                <option value={DiaSemana.Terca}>Terça-feira</option>
                <option value={DiaSemana.Quarta}>Quarta-feira</option>
                <option value={DiaSemana.Quinta}>Quinta-feira</option>
                <option value={DiaSemana.Sexta}>Sexta-feira</option>
                <option value={DiaSemana.Sabado}>Sábado</option>
            </select>

            <h1>Musculo:</h1>
            <select ref={valueMusculo} className="bg-white p-2" name="" id="" required>
                <option value="">Selecione um musculo:</option>
                {Array.isArray(musculos) &&
                    musculos.map((array) => (
                        <option key={array.id} value={array.id}>
                            {array.nome}
                        </option>
                    ))}
            </select>

            <div>
                <button
                    className="bg-blue-500 flex-1 text-white py-2 p-6 rounded cursor-pointer border-gray-300 mt-4"
                    onClick={handleCreateTrainningBody}
                >
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default CreateTreino;
