import styled from "styled-components"

export const DivSearch = styled.form`
    display: flex;
    align-items: center;
`

export const InputNumber = styled.input`
    color:white;
    background: #1a1a1a;
    border: none;
    border-radius: 1rem 0 0 1rem;
    height: 40px;
    padding: 0;
    cursor: pointer;
    text-align: center;

    :hover{
        border: 1px solid white;
        border-right: none;
    }

`

export const SearchButtom = styled.button`
    height: 40px;
    width: 60px;
    padding: 0;
    border-radius: 0 1rem 1rem 0;

    :hover{
        border: 1px solid white;
        border-left: none;
    }
`