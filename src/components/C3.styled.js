import styled from 'styled-components';

export const WrapperStyled=styled.div`
color:${({theme})=>theme==="dark"? "white":"black"}
` ;
WrapperStyled.displayName="WrapperStyled";