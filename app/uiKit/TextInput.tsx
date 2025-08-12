import { styled } from "styled-components";

interface Props {
  onChange: (value: string) => void
}

export function TextInput(props: Props){
  return <Input type="text" onChange={(e) => props.onChange(e.target.value)} />
}

var Input = styled.input`
  border: black 1px solid;
  border-radius: 0.25rem;
  padding: 0.25rem;
`
