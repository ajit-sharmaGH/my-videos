import {createContext, useContext, useReducer} from "react";
import { initialWatchList, watchReducer } from "../reducers/watchLater";


const defaultWatchValue = {};
const WatchContext = createContext(defaultWatchValue);

export const WatchProvider = ({children})=>{

    const [watchState, watchDispatch] = useReducer(
        watchReducer,
        initialWatchList
    )
    return(
        <WatchContext.Provider value={{watchState, watchDispatch}}>
            {children}
        </WatchContext.Provider>
    );
};
export const useWatchLater = () =>useContext(WatchContext);