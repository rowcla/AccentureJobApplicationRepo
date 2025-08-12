import { styled } from "styled-components";
import sampleData from "../../../../data/sampleData.json"
import { ProductBox } from "./productBox";

export function ProductTable() {
  return (
    <FlexContainer>
      <ProductBox data={sampleData[1]} />
    </FlexContainer>
  );
}

var FlexContainer = styled.div`
  display: flex;
`

export interface ProductData {
  index: number,
  isSale: boolean,
  // Normally I'd expect this would be better as a number with the dollar sign prepended as required, 
  // but the data has it as a string, so keeping it as such here
  price: string,
  productImage: string,
  productName: string,
  type: string,
}