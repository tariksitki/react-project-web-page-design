
import styled from "styled-components";

export const SectionMiddleComponent = styled.section`
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
            border: none;
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