import React, { useCallback, useContext } from 'react'
import { ThemeContext } from '../provider/ThemeProvider'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import styled from 'styled-components'
import {useLocalStorage} from "../hooks/useLocalStorage"

const StyledToggleThemeButton = styled.div`
    position: fixed;
    bottom: 10px;
    right: 10px;

    button {
        background-color: rgba(47, 36, 47, 0.7);
        border: none;
        padding: 5px;
        cursor: pointer;
        img {
            width: 50px;
            height: auto;
        }
    }
`;

export const ToggleThemeButton = () => {
    const [ state, dispatch ] = useContext(ThemeContext);
    const [theme,setTheme] = useLocalStorage('theme', false);
    const handleClick = useCallback(() => {
        dispatch({ type: 'CHANGE_THEME', payload: !state })
        setTheme(!state);
    }, [dispatch, state, setTheme]);

    return (
        <StyledToggleThemeButton>
            <button onClick={handleClick}>
                {state ? (
                    <img alt="sun" src={sun} />
                ) : (
                    <img alt="moon" src={moon} />
                )}
            </button>
        </StyledToggleThemeButton>
    )
}
