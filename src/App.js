import React, { useContext } from "react";
import { Routes } from "./components/Routes";
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from "./provider/AppProvider";
import styled from "styled-components";
import GlobalStyledProvider from "./provider/GlobalStyledProvider";
import { ThemeContext } from "./provider/ThemeProvider";
import { ToggleThemeButton } from "./components/ToggleThemeButton";
import HeaderContentProvider from "./provider/ContentHeaderProvider";
import ProductContextProvider from "./provider/ProductCompageProvider";

const StyleApp = styled.div`
  .hide-mobile{
    @media (max-width: 768px){
      display: none;
    }
  }
  .hide-desktop{
    @media (min-width: 768px){
      display: none;
    }
  }
`;
function App() {
  const { state } = useContext(ThemeContext)
  return (
    <>
      <StyleApp>
        <BrowserRouter>
          <AppProvider>
            <HeaderContentProvider>
              <ProductContextProvider>
                <Routes />
              </ProductContextProvider>
            </HeaderContentProvider>
          </AppProvider>
          <GlobalStyledProvider />
        </BrowserRouter>
      </StyleApp>
    </>
  )
}
export default App;
