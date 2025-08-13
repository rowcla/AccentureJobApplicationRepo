import { styled } from "styled-components";
import sampleData from "../../../../data/sampleData.json"
import { ProductBox } from "./productBox";
import { Stack } from "~/uiKit/Stack";
import { ActionBar } from "./actionBar";
import { useState } from "react";

export interface ProductFilters {
  productType?: string,
  productName?: string,
}

export function ProductTable() {
  var [filters, setFilters] = useState<ProductFilters>({})

  var data = getFilteredProductData(filters)
  
  return (
    <Stack direction="column" style={{margin: "1rem"}}>
      <ActionBar 
        onChangeNameFilter={(value) => {setFilters((f) => ({...f, productName: value}))}}
        onChangeTypeFilter={(value) => {setFilters((f) => ({...f, productType: value}))}}
      />
      <FlexContainer>
        {data.map(dataItem =>  
          <ProductBox data={dataItem} />
        )}
      </FlexContainer>
    </Stack>
  );
}

export function getFilteredProductData(filters: ProductFilters){
   return sampleData.filter(item => {
    if(filters.productType && item.type != filters.productType){
      return false
    }
    if(filters.productName && filters.productName !== "" && !item.productName.toLowerCase().includes(filters.productName.toLowerCase())){
      return false
    }
    return true
  });
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