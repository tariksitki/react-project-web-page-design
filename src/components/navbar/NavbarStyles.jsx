
import styled from "styled-components";

export const NavbarMain = styled.nav`
    background-color: rgb(59, 73, 87);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 11vh;
    border-bottom: 2px solid rgb(177, 101, 209);
    width: 100%;
`

export const NavLeft = styled.div`

    margin-left: 1rem;
    h2 {
        color: rgb(177, 101, 209);
    }
    span {
        color: rgb(241, 239, 239);
    }
`

export const NavRight = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 1rem;
    width: 17rem;
    font-size: 14px;   
    p, a {
        text-decoration: none;
        color: rgb(241, 239, 239);
        font-size: 1.1rem;
        cursor: pointer;
        &:hover {
            color: rgb(177, 101, 209);
        }
    }
`