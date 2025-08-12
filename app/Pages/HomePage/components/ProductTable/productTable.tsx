import { styled } from "styled-components";
import sampleData from "../../../../data/sampleData.json"
import { ProductBox } from "./productBox";
import { Stack } from "~/uiKit/Stack";
import { ActionBar } from "./actionBar";

export function ProductTable() {
  return (
    <Stack direction="column" style={{margin: "1rem"}}>
      <ActionBar />
      <FlexContainer>
        {sampleData.map(dataItem =>  
          <ProductBox data={dataItem} />
        )}
      </FlexContainer>
    </Stack>
  );
}

var FlexContainer = styled.div`
  flex-wrap: wrap;
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