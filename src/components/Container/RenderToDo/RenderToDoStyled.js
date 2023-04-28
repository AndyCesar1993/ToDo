import styled, { css } from "styled-components";

export const UlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 0.7rem;
    margin-top: 25px;
    padding: 1rem;
    gap: 0.2rem;
    background: #282828;
    box-shadow: 0px 0px 10px 0px #fff;
`;
export const LiStyled = styled.li`
    background: #1a1a1a;
    border-radius: 0.7rem;
    display: flex;
    justify-content: space-between;
    padding: 0 3px;

    .deleteTask:hover{
        cursor: pointer;
        color: red;
    }
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