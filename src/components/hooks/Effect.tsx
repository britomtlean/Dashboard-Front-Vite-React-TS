import { useEffect, useState } from 'react';

const Effect = () => {
    const [count, setCount] = useState<number>(1);
    const [isRunning, setIsRunning] = useState<boolean>(true);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setCount((prev) => prev + 1); // evita problema de estado antigo
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleResume = () => {
        setIsRunning(true);
    };

    return (
        <>
            <h2 className="text-7xl mt-4">{count}</h2>

            <div className="mt-4">
                <button onClick={handlePause} className="mr-2 btn-remove">
                    Pause
                </button>
                <button className="btn-secondary" onClick={handleResume}>
                    Resume
                </button>
            </div>
        </>
    );
};

export default Effect;
