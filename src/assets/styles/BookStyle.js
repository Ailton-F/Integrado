import styled from "styled-components";

export const BlockTest = styled.img`
    width: 898px;
    height: 606px;
    border-radius: 10px;
`;

export const BuyBtn = styled.a`
    background-color: #6CD05C;
    border: 1px solid #6CD05C;
    padding: .3em 1.5em;
    margin-right: 2em;
    border-radius: 500px;

    :hover{
        background-color: white;
        border-color: #6CD05C;
        color: #6CD05C !important;
    }

    :focus{
        background-color: #5db450;
    }
`;

export const SmallBlock = styled.img`
    width: 286px;
    height: 194px;
    margin-left: 50px;
    margin-bottom: 10px;
    border-radius: 10px;
`;