import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Home from './components/Home';
import { Context } from './context/ContextProvider';
import { FetchLogin } from './data/FetchLogin';

function App() {
    const { setUser, user } = useContext(Context)!;

    useEffect(() => {
        FetchLogin.getProfile()
            .then((data) => setUser(data))
            .catch((er) => console.log(er));
    }, []);

    return (
        <>
            <Home user={user}>
                <Outlet />
            </Home>
        </>
    );
}

export default App;
