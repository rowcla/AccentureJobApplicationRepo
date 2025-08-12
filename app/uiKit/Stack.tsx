import { styled } from "styled-components";

export var Stack = styled.div<{gap?: number}>`
    display: flex;
    flex-direction: row;
    gap: ${p => p.gap}rem;
    overflow: auto;
    max-width: -webkit-fill-available;
`