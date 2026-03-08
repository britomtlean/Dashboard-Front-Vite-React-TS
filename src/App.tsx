import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Home from './components/Home';
import { Context } from './context/ContextProvider';
import { FetchLogin } from './data/FetchLogin';

//ICONS
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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
            {!user ? (
                <div className="bg-slate-400 h-screen w-full justify-center items-center flex flex-col gap-4">
                    <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
                    <h1 className='font-medium'>Loading...</h1>
                </div>
            ) : (
                <Home user={user}>
                    <Outlet />
                </Home>
            )}
        </>
    );
}

export default App;
