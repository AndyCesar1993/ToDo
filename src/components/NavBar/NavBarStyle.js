import { Link } from "react-router-dom";
import styled , { css } from "styled-components";



export const DivStyled = styled.div`
    display:flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    padding: 5px 30px;
    gap: 150px;
    top: 0;
    left: 5%;
    width: 85%;
    background: #303030;
    border-radius: 0 0 2rem 2rem;
    border: 2px solid white;
`

export const UlStyled = styled.ul`
    display: flex;
    gap: 15px;
`
export const LinkStyled = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
    cursor: pointer;
    :hover{
        color: red;
    }
`
