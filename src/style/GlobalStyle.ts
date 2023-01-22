import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    * {
      box-sizing: border-box;
      font-family: 'Source Sans Pro', sans-serif;
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
    }
    
    body {
      height: 100vh;
      width: 100vw;
      background-color: var(--background-body);
    }
    
    #root {
      width: 100%;
      height: 100%;
    }


    :root {
      --body: #F2F2F2;
      --list: #D1DCE32E;
      --title: #3D75BB;
    }
`
export const AppEstilizado = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`