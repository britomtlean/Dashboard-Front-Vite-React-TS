import { useState, createContext } from 'react';
import type { PropsWithChildren } from 'react'; //TIPAGEM PARA PROP

export type ContextType = {
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    user: Record<string, any> | null;
    setUser: React.Dispatch<React.SetStateAction<Record<string, any> | null>>;
};

//function createContext<T>(defaultValue: T): React.Context<T>

//createContext() Deve receber um tipo e ser atribuido pelo mesmo tipo
export const Context: React.Context<ContextType | null> = createContext<ContextType | null>(null);

/************************************************************************************** */

export const ContextProvider = ({ children }: PropsWithChildren) => {

    console.log('Context renderizou')
    
    const [theme, setTheme] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('Seja Bem vindo');
    const [user, setUser] = useState<Record<string, any> | null>(null);

    return (
        <Context.Provider value={{ theme, setTheme, message, setMessage, user, setUser }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
