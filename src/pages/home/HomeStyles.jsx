
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

export const SectionMiddle = styled.section`
    background-color: rgb(59, 73, 87);
    display: flex;
    justify-content: space-between;
    color: rgb(241, 239, 239);
    align-items: center;
    height: 10vh;
    .left {
        margin-left: 2rem;
    }
    .right {
        margin-right: 1rem;
        height: 2rem;
        width: 25rem;
        input, button {
            height: 100%;
        }
        input {
            width: 60%;
            border-radius: 0px 10px;
            outline: none;
            padding-left: 1rem;
        }
        button {
            width: 28%;
            background-color: rgb(253, 94, 35);
            color: white;
            border-radius: 0px 10px;
            border: none;
            margin-left: 1rem;
            transition: all 400ms;
            font-size: 0.9rem;

            &:hover {
                background-color: white;
                color: rgb(253, 94, 35);
                font-weight: 600;
                cursor: pointer;
                transition: all 400ms;
            }
        }
    }
`;


export const SectionDown = styled.section`
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
    height: 28vh;
`
