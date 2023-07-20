import styled from "styled-components";

export const Card = styled.div`
    margin-top: 3.75rem !important;
`;

export const SbmtBtn = styled.button`
    background-color: #6CD05C;
    margin-top: 2rem;
`

export const Form = styled.form`
    max-width: 22rem;
    margin: auto;
`;

export const DeleteBtn = styled.button`
    background-color: #D05C5C;
    border: 1px solid #D05C5C;
    padding: .3em 1.5em;
    margin-right: 2em;
    border-radius: 500px;

    :hover{
        background-color: white;
        border-color: #D05C5C;
        color: #D05C5C !important;
    }

    :focus{
        background-color: #5db450;
    }
`;