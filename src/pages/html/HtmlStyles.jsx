
import styled from "styled-components";

export const HtmlMain = styled.main`
    width: 100%;
    height: 73vh;
    display: flex;
    flex-direction: column;
    align-items: center; 
`
export const HtmlMainUp = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
            width: 10rem;
            height: 10rem;
    }
`

export const HtmlMainDown = styled.section`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 2rem;
    }
    p {
        margin-top: 2rem;
        width: 80%;
        font-size: 1.2rem;
        text-align: justify;
        line-height: 2rem;
    }

`