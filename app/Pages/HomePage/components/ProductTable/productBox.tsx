import React from "react";
import { styled } from "styled-components";
import type { ProductData } from "./productTable";
import { Stack } from "~/uiKit/Stack";

interface Props {
    data: ProductData
}

export function ProductBox(props: Props) {
  return (
    <BoxContainer>
        {props.data.isSale && 
          <SaleNotification>
            Sale
          </SaleNotification>
        }
      <ImageContainer src={`/productImages/${props.data.productImage}`} />
      <Stack gap={1}>
        <TextContainer>
          {props.data.productName}
        </TextContainer>
        <TextContainer>
          {props.data.price}
        </TextContainer>
      </Stack>
    </BoxContainer>
  );
}

var boxPadding = '1.5rem'

var BoxContainer = styled.div`
  display: flex;
  border: black 1px solid;
  padding: ${boxPadding};
  flex-direction: column;
  width: 18rem;
  align-items: center;
  position: relative;
`

var imageSize = "12rem"

var ImageContainer = styled.img`
  height: ${imageSize};
  width: ${imageSize};
  object-fit: cover;
`

var TextContainer = styled.p`
  padding-top: 0.5rem;
`

var SaleNotification = styled.div`
  position: absolute;
  padding: 0.25rem 1.5rem;
  border: black 1px solid;
  background: white;
  margin: -${boxPadding};
  align-self: start;
`