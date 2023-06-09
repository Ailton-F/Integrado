import styled from "styled-components";

export const SearchBar = styled.form`
    border: 1px solid #D2D2D2;
`;

export const BrandIcon = styled.a`
    margin-right: 4rem;
`;

export const BtnSearch = styled.button`
    border: 1px solid #D2D2D2;
    border-radius: 50%;
    color: #6CD05C;

    :hover{
        background-color: #6CD05C;
        color: white;
    }
`;

export const BtnLogin = styled.a`
    border: 1px solid #d2d2d2;
`;

export const BtnRegister = styled.a`
    background-color: #6CD05C;
`;

export const InputSearch = styled.input`
    border: none;
    :focus{
        box-shadow: none;
    }
`;