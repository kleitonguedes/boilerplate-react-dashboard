import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html,
    body,
    #root {
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }
`;

export const AppStructure = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-areas: "head head"
                        "nav  main"
                        "nav  foot";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr;
`;

export const AppHeader = styled.header`
    grid-area: head;
`;

export const AppMenu = styled.aside`
    grid-area: nav;
`;

export const AppContent = styled.main`
    grid-area: main;
`;

export const AppFooter = styled.footer`
    grid-area: foot;
`;
