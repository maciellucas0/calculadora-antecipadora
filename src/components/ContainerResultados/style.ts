import styled from "styled-components"

export const ContainerResultadosStyle = styled.div`
  height: 100%;
  width: 38%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  

  h2 {
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    width: fit-content;
    color: var(--title-list);
  }

 

  .linhaDivisora {
    width: 80%;
    background-color: var(--title-list);
    height: 2px;
  }
`
