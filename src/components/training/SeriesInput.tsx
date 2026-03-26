import { useEffect, useState } from 'react';

// 🔹 Tipo da série
type Serie = {
    rep: number;
    peso: number;
};


type Props = {
    onChange: (series: Serie[]) => void;
};

export default function SeriesInput({ onChange }: Props): React.JSX.Element {
    const [series, setSeries] = useState<Serie[]>([{ rep: 0, peso: 0 }]);

    const handleChange = (index: number, field: keyof Serie, value: number): void => {
        const newSeries = [...series];
        newSeries[index][field] = value;
        setSeries(newSeries);
    };

    const addSerie = (): void => {
        setSeries((prev) => [...prev, { rep: 0, peso: 0 }]);
    };

    const removeSerie = (index: number): void => {
        setSeries((prev) => prev.filter((_, i) => i !== index));
    };

    // 🔥 AQUI É O MAIS IMPORTANTE
    useEffect(() => {
        onChange(series);
    }, [series, onChange]);

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">Séries</h2>

            {series.map((serie, index) => (
                <div key={index} className="flex gap-2 items-center">
                    <input
                        type="number"
                        value={serie.rep}
                        onChange={(e) => handleChange(index, 'rep', Number(e.target.value))}
                        className="border p-2 rounded w-24"
                    />

                    <input
                        type="number"
                        value={serie.peso}
                        onChange={(e) => handleChange(index, 'peso', Number(e.target.value))}
                        className="border p-2 rounded w-24"
                    />

                    <button
                        type="button"
                        onClick={() => removeSerie(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                        X
                    </button>
                </div>
            ))}

            <button type="button" onClick={addSerie} className="bg-green-500 text-white px-4 py-2 rounded">
                + Adicionar série
            </button>
        </div>
    );
}
