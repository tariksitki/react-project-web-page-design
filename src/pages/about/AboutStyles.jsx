
import styled from "styled-components";

export const AboutMainContainer = styled.main`
    height: 68.5vh;
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color:rgb(241, 239, 239);
`;

export const AboutMainContainerLeft = styled.section`
    width: 70%;
    padding: 2rem;
    p {
        text-align: justify;
        margin-top: 1rem;
    }
    h2 {
    background-color: rgb(43, 53, 63);
    width: 6.5rem;
    color: rgb(241, 239, 239);
    padding: 0.5rem;
    font-size: 20px;
    border-radius: 0px 10px;
    font-weight: 500;
    text-align: center;
}
    .about_main_left_p2 {
    background-color: rgb(43, 53, 63);
    color: rgb(241, 239, 239);
    padding: 2rem 1rem;
    border-radius: 0px 20px;
}
`;

export const AboutMainContainerRight = styled.section`
    width: 28%;
    padding: 2rem;
    background-color: rgb(43, 53, 63);
    height: 56%;
    margin-top: 3.5rem;
    color: rgb(241, 239, 239);
    margin-right: 1.7rem;
    padding-top: 1rem;
    border-radius: 0px 20px;
    p {
        text-align: justify;
        margin-top: 1rem;
    }
`;

