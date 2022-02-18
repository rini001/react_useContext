import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider';
import {WrapperStyled} from './C3.styled'
export const C3 = () => {
    const {theme}=useContext(ThemeContext);
  return (
      
    <WrapperStyled theme={theme}>Text Changing Color</WrapperStyled>
  )
};
