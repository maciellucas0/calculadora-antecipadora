import ContainerValores from "../ContainerValores"
import RightContainer from "../ContainerResultados"

import { ContainerGeral } from "./style"

const Container = () => {
  return (
    <ContainerGeral>
      <ContainerValores />
      <RightContainer />
    </ContainerGeral>
  )
}

export default Container
