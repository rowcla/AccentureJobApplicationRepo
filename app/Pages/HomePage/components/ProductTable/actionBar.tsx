import React from "react";
import { styled } from "styled-components";
import Select from "react-select";
import SampleData from "../../../../data/sampleData.json"
import { Stack } from "~/uiKit/Stack";
import { TextInput } from "~/uiKit/TextInput";

interface Props {
  onChangeTypeFilter: (val?: string) => void
  onChangeNameFilter: (val?: string) => void
}

export function ActionBar(props: Props) {
  return (
    <BoxContainer>
      <Stack dir="row" gap={2} style={{
        justifyContent: "end", 
        alignItems: "center",
        // The select library being used has issues with the borders causing overflow. 
        // Fixing this is being considered unecessary for the task
        padding: "1px"
      }}>
        <p>Filter by</p> 
        <Select options={[{label: "All", value: undefined}, ...productTypeOptions]} onChange={(val) => props.onChangeTypeFilter(val?.value)} menuPosition="fixed"/>
        <TextInput onChange={props.onChangeNameFilter}/>
      </Stack>
    </BoxContainer>
  );
}

// Normally this would be expected to be a predefined list, however this hasn't been provided, so we're inferring from
// what types are present in the provided data
var productTypeOptions = SampleData.map(item => ({value: item.type, label: item.type}))
  .filter(
    (item, i, self) => self.findIndex(item2 => item2.value === item.value) === i
  );

var BoxContainer = styled.div`
  border: black 1px solid;
  padding: 0.5rem 2rem;
  text-align: end;
`   