
import styled from "styled-components";
import ShowcaseFoto from "../../assets/img/showcase.jpg";



export const HomeHeader = styled.header`
    background-image: url(${ShowcaseFoto});
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(241, 239, 239);
    /* background-attachment: fixed; */
    background-position: center;
    background-size: cover;
    h1 {
        margin-bottom: 2rem;
        font-size: 2.5rem;
    }
    p {
        font-size: 1.2rem;
    }
`;


export const SectionDown = styled.section`
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
    height: 28vh;
`
