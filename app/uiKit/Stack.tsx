import { styled } from "styled-components";

export var Stack = styled.div<{gap?: number, direction?: "row" | "column"}>`
    display: flex;
    flex-direction: ${p => p.direction ?? "row"};
    gap: ${p => p.gap ?? 0}rem;
    overflow: auto;
    max-width: -webkit-fill-available;
`