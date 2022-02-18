
import { Navbar } from './components/Navbar';
import { Body } from './components/Body';
import { ThemeContext } from './context/ThemeProvider';
import { AppWrapper } from './App.styled';
import {useContext} from "react";
function App() {
  const {theme}=useContext(ThemeContext)
  return (
    <AppWrapper theme={theme}>
    
     <Navbar />
     <Body />
    </AppWrapper>
  );
}

export default App;
