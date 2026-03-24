import { useState, useEffect } from 'react';
import { Training } from '../data/Training';

const useTraining = () => {
    const [dados, setDados] = useState<Array<Record<string, any>>>([]);
    const [exercises, setExercises] = useState<Array<Record<string, any>>>([]);
    const [musculos, setMusculos] = useState<Array<Record<string, any>>>([]);

    useEffect(() => {
        Training.allTrainings()
            .then((data) => setDados(data))
            .catch((er) => {
                console.error(er);
            });
    }, []);

    useEffect(() => {
        Training.getMuscuslos()
            .then((data) => setMusculos(data))
            .catch((er) => {
                console.error(er);
            });
    }, []);

    useEffect(() => {
        Training.getExercices()
            .then((data) => setExercises(data))
            .catch((er) => {
                console.error(er);
            });
    }, []);

    return { dados, setDados, exercises, setExercises, musculos, setMusculos };
};

export default useTraining;
