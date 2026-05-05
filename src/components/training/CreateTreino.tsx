import { useRef } from 'react';
import type { TrainingBody } from '../../types/Training';
import { Training } from '../../data/Training';
import { DiaSemana } from '../../types/EnumDiaSemana'
import useTraining from '../../hooks/useTraining';
import { useNavigate, useSearchParams } from 'react-router-dom';
import corrida from '../../assets/corrida.jpg';

const CreateTreino = () => {

    const navigate = useNavigate();

    //params
    const [searchParams] = useSearchParams();
    const day = searchParams.get('day');
    console.log(day)


     const { musculos } = useTraining();


    const refMusculo = useRef<HTMLSelectElement | null>(null);
    const refDia = useRef<HTMLSelectElement | null>(null);


    const handleCreateTrainningBody = () => {
        if (!refMusculo.current || !refDia.current) {
            return
        }

        if (!refMusculo.current!.value || !refDia.current!.value) {
            alert('Dados inválidos!');
            return
        }

        const newTraining: TrainingBody = {
            diaSemana: Number(refDia.current?.value),
            musculo: Number(refMusculo.current?.value),
        };

        console.log('Treino criado:', newTraining);
        Training.addTraining(newTraining)
            .then(() => { (alert('Treino criado com sucesso!'), navigate('/treino-do-dia'));})
            .catch((err) => alert(err));
    };

    return (
        <div className="flex flex-col gap-2 justify-center items text-left w-full
            md:w-1/2">
            <h1>Dia da semana:</h1>
            <select ref={refDia} className="bg-white p-2" required defaultValue={day as string}>
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
            <select ref={refMusculo} className="bg-white p-2" name="" id="" required>
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
                    Criar
                </button>
            </div>

            <div className='mt-4'>
                <img src={corrida} alt=""  className='opacity-80 rounded-lg' />
            </div>
        </div>
    );
};

export default CreateTreino;
