import { createContext, useReducer ,useEffect} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

const initialState = false;

function reducerFn(state, action) {
    switch (action.type) {
        case "CHANGE_THEME":
            return action.payload;
        default:
            return state;
    }
}

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFn, initialState);

    const [theme] = useLocalStorage("theme");


    useEffect(() => {
        dispatch({type: 'CHANGE_THEME',payload:theme});
        
    }, [dispatch,theme])
    

    return (<ThemeContext.Provider value={{ state, dispatch }}>
        {children}
    </ThemeContext.Provider>
    )
}