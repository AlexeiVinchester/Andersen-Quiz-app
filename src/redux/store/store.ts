import { legacy_createStore as createStore} from 'redux'
import { rootReducer } from "../reducers/rootReducer/rootReducer";

const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };