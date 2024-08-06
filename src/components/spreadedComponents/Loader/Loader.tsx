const Loader = () => {
    return (
        <div className="flex-col">
            <h4>...Loading of questions</h4>
            <div className="spinners">
                <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export { Loader };