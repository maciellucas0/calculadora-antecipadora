import Input from "../entradaValores/index"
import { CalculatorPostData } from "../../interfaces"
import { ContainerValoresStyle } from "./style"


const ContainerValores = () => {


  const onSubmit = (data: CalculatorPostData) => {
    return {}
  }

  return (
    <ContainerValoresStyle>
      <h1>Simule sua Antecipação</h1>
      <form onChange={() => (onSubmit)}>
        <Input
          label="Informe o valor da venda *"
          placeholder="Ex: 1000"
        />
        <Input
          label="Em quantas parcelas *"
          placeholder="Ex: 5"
        />
        <Input
          label="Informe o percentual de MDR *"
          placeholder="Ex: 25"
        />
      </form>
    </ContainerValoresStyle>
  )
}

export default ContainerValores
