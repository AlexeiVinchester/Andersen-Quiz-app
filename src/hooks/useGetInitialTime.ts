import { useSelector } from "react-redux";
import { Store } from "../redux/store/interface/store.interface";

const useGetInitialTime = () => {
    return +useSelector((state: Store) => state.configuration.time)[0] * 60;
};

export { useGetInitialTime }