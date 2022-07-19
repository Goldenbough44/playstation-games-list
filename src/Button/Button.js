import styled from "styled-components";

const Button = styled.div`
    padding: 0.6rem;
    background-color: transparent;
    color: black;
    border: 2px black inset;
    border-radius: 16px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    font-size: 0.9rem;

    &:hover{
        background-color: black;
        color: white;
        transition-duration: .2s;
    }
`;


export default Button;