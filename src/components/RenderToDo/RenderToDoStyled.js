import styled, { css } from "styled-components";

export const UlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 0.7rem;
    margin-top: 1rem;
    padding: 1rem;
    gap: 0.2rem;
`;
export const LiStyled = styled.li`
    background: #1a1a1a;
    border-radius: 0.7rem;
    display: flex;
    justify-content: space-between;
    padding: 0 3px;
`;

export const ErrorStyled = styled.p`
    color: red;
`;

export const ClearAllStyled = styled.button`
    display: flex;
    align-items: center;
    gap:10px;
    width: auto;
    margin: 15px auto;

    :hover{
        color: red;
    }
`;