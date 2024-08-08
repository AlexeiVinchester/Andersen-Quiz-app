const Loader = () => {
    return (
        <div className="flex-col">
            <h4>...Loading of questions</h4>
            <div className="spinners">
                <div className="spinner-border spinner-size" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow spinner-size" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export { Loader };