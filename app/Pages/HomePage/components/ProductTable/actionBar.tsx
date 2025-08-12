import React from "react";
import { styled } from "styled-components";
import type { ProductData } from "./productTable";
import { Stack } from "~/uiKit/Stack";

interface Props {
}

export function ActionBar(props: Props) {
  return (
    <BoxContainer>
        Filter by <select />
    </BoxContainer>
  );
}

var BoxContainer = styled.div`
  border: black 1px solid;
  padding: 0.5rem 2rem;
  text-align: end;
`   