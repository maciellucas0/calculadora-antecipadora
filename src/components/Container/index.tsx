import ContainerValores from "../ContainerValores"
import ContainerResultados from "../ContainerResultados"

import { ContainerGeral } from "./style"

const Container = () => {
  return (
    <ContainerGeral>
      <ContainerValores />
      <ContainerResultados />
    </ContainerGeral>
  )
}

export default Container
