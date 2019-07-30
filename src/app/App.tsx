import React from 'react';
import {
  GlobalStyle,
  AppStructure,
  AppHeader,
  AppMenu,
  AppContent,
  AppFooter
} from './AppStyled';
import Menu from '../menu/Menu';



function App() {
  return (
    <AppStructure>
      <GlobalStyle />
      
      <AppHeader>HEADER</AppHeader>
      
      <AppMenu>
        <Menu />
      </AppMenu>
      
      <AppContent>CONTENT</AppContent>
      
      <AppFooter>FOOTER</AppFooter>
    </AppStructure>
  )
}

export default App;
