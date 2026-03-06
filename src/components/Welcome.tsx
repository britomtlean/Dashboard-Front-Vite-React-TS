import { useContext, useRef, useState, useEffect } from 'react';
import { Context } from '../context/ContextProvider';
import { BiSolidLike } from 'react-icons/bi';

const Welcome = () => {
    //CONTEXT
    const { message, user } = useContext(Context)!;

    //REF
    const refMessage = useRef<HTMLHeadingElement | null>(null);

    //STATE
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        if (!refMessage.current) return;

        let contador = 100;

        const interval = setInterval(() => {
            contador += 2;

            if (refMessage.current) {
                refMessage.current.style.top = `${contador}px`;
            }

            setActive((active ? false : true));

            if (contador >= 300) {
                clearInterval(interval);
            }
        }, 5);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-5 pt-20 text-center">
            <h1 className={`font-extrabold text-4xl absolute transition-all top-25 ease-in`} ref={refMessage}>
                {message}
            </h1>
            <h1 className="font-bold text-3xl">{user?.nome}</h1>
            <div className="p-4">
                <BiSolidLike className="text-5xl animate-bounce" />
            </div>
        </div>
    );
};

export default Welcome;
