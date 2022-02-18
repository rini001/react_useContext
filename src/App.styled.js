import styled from 'styled-components'

export const AppWrapper=styled.div`
text-align:center;
background-color: ${({theme})=>theme==="dark"?"black":"white"};
height:100vh
`