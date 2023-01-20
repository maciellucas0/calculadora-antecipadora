import { InputStyle } from "./style"
import { InputProps } from "../../interfaces"

const Input = ({
  label,
  placeholder,
}: InputProps) => {


  return (
    <InputStyle>
      <span>{label}</span>
      <input placeholder={placeholder} />
    </InputStyle>
  )
}

export default Input
