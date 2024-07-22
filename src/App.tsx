import { RouterProvider } from 'react-router-dom';
import { router } from './components/Router/router';
import './App.css';
import { TimerIdProvider } from './components/context/TimerIdProvider';

function App() {
    return (
        <>
            <TimerIdProvider>
                <RouterProvider router={router} />  
            </TimerIdProvider>
        </>
    )
}

export { App };
