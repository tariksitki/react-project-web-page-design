
import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 0rem 2rem;
    transition: all 300ms;
    &:hover {
        box-shadow: 0 0 1rem 2px ;
        cursor: pointer;
        transition: all 300ms;
        img {
        width: 5rem;
        height: 5rem;
        transition: all 500ms;
    }
    }

    img {
        width: 4rem;
        height: 4rem;
        transition: all 500ms;
    }
`