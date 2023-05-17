import styled from 'styled-components';

export const Input = styled.input`
    padding: .75rem;
    border: 1px solid #ced4da;
`;

export const SbmtBtn = styled.input`
    background-color: #6CD05C ;
    padding: 1rem !important;
    border-radius: 500px ;

    :focus{
        background-color: #5db450;
    }
`;

export const Icon = styled.div`
    border: 1px solid #ced4da;
    padding: .75rem;
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: #D2D2D2;
`

export const Pass = styled(Input)`
    border-right: 0;
    border-top: solid 1px #ced4da;
    border-left: solid 1px #ced4da;
    border-bottom: solid 1px #ced4da;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`

export const Link = styled.a`
    font-weight: 600;
    color: #727CF5;
    
    :hover{
        cursor: pointer;
    }
`;

export const Card = styled.div`
    max-width: 29em;
    padding-left: 2.75rem;
    padding-right: 2.75rem;

    .card-header{
        margin-top: 2rem;

        .card-title{
            color: #4A4A4A !important;
        }
    }
`;

export const TinyTxt = styled.p`
    font-size: .75rem;
`