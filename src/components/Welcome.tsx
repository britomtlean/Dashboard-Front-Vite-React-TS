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

    //EFFEC
    /*
    useEffect(() => {
        if (!refMessage.current) return;

        do {
            var contador = 0;
            setInterval(() => {

                if (refMessage.current) refMessage.current.style.top = `${contador}px`;
                let state = active ? false : active;
                setActive(state);
                contador++
            }, 2000);
        } while (contador < 300);
    }, []);
    */

    useEffect(() => {
        if (!refMessage.current) return;

        let contador = 100;

        const interval = setInterval(() => {
            contador += 8;

            if (refMessage.current) {
                refMessage.current.style.top = `${contador}px`;
            }

            setActive((active ? false : true));

            if (contador >= 300) {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-5 pt-20 text-center">
            <h1 className={`font-extrabold text-5xl absolute transition-all top-20 ease-out`} ref={refMessage}>
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
