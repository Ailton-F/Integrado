import styled, {css} from "styled-components";
import { responsive } from "./Responsive";

export const Carousel = styled.div`
    position: relative;
    overflow: hidden;
    padding-top: 4rem;

    .cards-container{
        position: relative;
        left: 0px;
        transition: left 0.5s ease-in-out;
    }

    .control{
        position: absolute;
        background-color: white;
        top: 40%;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        :disabled{
            border: none;
        }
        :focus{
            border: none;
        }
        :hover{
            background-color: white;
        }

    }
`;

export const CardContainer = styled.div`
    padding-top: 4rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Icon = styled.i`
    font-size: 2rem;
    color: #727CF5;
`; 

export const NextButton = styled.button`
    left: 95%;
    ${({pos})=>{
        return responsive(
            pos, 
            (breakpoint) => 
            css`
                left: ${pos[breakpoint.point]}%;
            `
        );
    }}
`;

export const PrevButton = styled.button`
    right: 95%;
    ${({pos})=>{
        return responsive(
            pos, 
            (breakpoint) => 
            css`
                right: ${pos[breakpoint.point]}%;
            `
        );
    }}
`;

export const IndividualCard = styled.div`
    transition: transform .5s ease;
    :hover{
        transform: translateY(-30px);
    }
`;