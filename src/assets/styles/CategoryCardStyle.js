import styled, {css} from "styled-components";
import { responsive } from "./Responsive";

export const Img = styled.img`
    width: 100%;
    ${({imgWidth})=>{
        return responsive(
            imgWidth, 
            (breakpoint) => 
            css`
                width: ${imgWidth[breakpoint.point]}rem;
            `
        );
    }}
`