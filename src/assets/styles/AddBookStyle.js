import styled from "styled-components";

export const Card = styled.div`
    margin-top: 3rem;
    max-width: 100%;
    padding: 4.875rem 6rem;
`;

export const Title = styled.h2`
    margin-top: 4rem;
`;

export const SbmtBtn = styled.input`
    background-color: #6CD05C ;
    border-radius: 500px ;
    border: none;
    :focus{
        background-color: #5db450;
    }
`;

export const TextMuted = styled.span`
    color: #B1B1B1;
`;

export const FileInput = styled.label`
    border: 1px solid #727CF5;
    padding: 1.625rem 2.5rem;
    color: #727CF5;
    cursor: pointer;
    :hover{
        background-color: #727CF5;
        color: white;
    }
`;

export const FileIcon = styled.i`
    font-size: 4rem;
`;

export const TinyText = styled.span`
    font-size: .75rem;
`;