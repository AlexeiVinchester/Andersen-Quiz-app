import { Outlet } from "react-router-dom";

const BasicPage = () => {
  return (
    <div className="basic-page">
        <header>
            <h2>Header</h2>
        </header>
        <Outlet />
        <footer>
            <h2>Footer</h2>
        </footer>
    </div>
  )
}

export { BasicPage };
