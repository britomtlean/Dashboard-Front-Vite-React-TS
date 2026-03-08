import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Home from './components/Home';
import { Context } from './context/ContextProvider';
import { FetchLogin } from './data/FetchLogin';

import Loading from './components/Loading';

function App() {
    const { setUser, user } = useContext(Context)!;
    const navigate = useNavigate();
    //const [ loading, setLoading ] = useState<boolean>(true)

    useEffect(() => {
        FetchLogin.getProfile()
            .then((data) => setUser(data))
            .catch((er) => {
                (console.error(er), navigate('/login'));
            });
    }, []);

    useEffect(() => {
        if (user) return;

        const redirect = setTimeout(() => {
            navigate('/login');
        }, 5000);

        return () => clearInterval(redirect);
    }, [user]);

    return (
        <>
            {!user
            ? (
            <Loading/>
            ) : (
                <Home user={user}>
                    <Outlet />
                </Home>
            )}
        </>
    );
}

export default App;
