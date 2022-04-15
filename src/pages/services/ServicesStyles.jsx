
import styled from "styled-components";

export const ServicesMain = styled.main`
    height: 68vh;
    display: flex;
    justify-content: space-around;
`;

export const ServicesMainLeft = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 65%;
    padding: 0rem 2rem;

    .left-first-div {
        width: 9rem;
        border-radius: 0px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div {
        background-color: rgb(240, 239, 239);
        padding: 1rem;
        border-radius: 0px 20px;
        p {
            margin-top: 1rem;
        }
    }
`;

export const ServicesMainRight = styled.section`
    background-color: rgb(59, 73, 87);
    height: 78%;
    color: rgb(248, 246, 246);
    margin-top: 5%;
    padding: 1rem;
    border-radius: 0px 20px;
    width: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        margin-top: 1rem;
        width: 90%;
        font-size: 1rem;
        input, 
        #message {
            width: 100%;
            margin-bottom: 1rem;
            resize: none;
            border-radius: 0px 10px;
            border: none;
            outline: none;
            padding: 1rem; 
        }
        input {
            height: 1.8rem;
        }

        .button-div {
            width: 6rem;
            height: 2rem;
            margin: auto;

            button {
            background-color: rgb(253, 94, 35);
            color: white;
            width: 100%;
            height: 100%;
            border-radius: 0px 10px;
            border: none;
            transition: all 500ms;
            font-size: 15px;
            margin: auto;
            &:hover {
                background-color: white;
                color: rgb(253, 94, 35);
                transition: all 500ms;
                font-weight: 700;
                font-size: 17px;
                cursor: pointer;
            }
        }
        }
    }
`;

