
import styled from "styled-components";

export const IconDiv = styled.div`
    width: 100%;
    height: 5vh;
    div {
        width: 20rem;
        display: flex;
        align-items: center;
        p {
            margin-left: 2rem;
        }
    }
    .icon {
        width: 2rem;
        height: 2rem;
        margin-left: 1rem;
        cursor: pointer;
        &:hover {
            color : rgb(177, 101, 209);
        }
    }
`