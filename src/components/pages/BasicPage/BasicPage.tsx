import { Outlet } from "react-router-dom";

const BasicPage = () => {
    return (
        <div className="basic-page">
            <header>
                <h2>Quiz Application</h2>
            </header>
            <div className="body">
                <Outlet />
            </div>
            <footer>
                <h2>Andersen react-intensive 2024</h2>
            </footer>
        </div>
    );
}

export { BasicPage };
