import { RouterProvider } from 'react-router-dom';
import { router } from './components/Router/router';
import './App.css';

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export { App };
