import { useState } from "react"
import styled from "styled-components"


const Button = styled.div`
    display: inline-block;
`

const Label = styled.label`
    padding: 0.3rem 0.6rem;
    background-color: transparent;
    color: black;
    border: 2px black inset;
    border-radius: 16px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    font-size: 0.8rem;
    line-height: 1rem;
    margin-right: 0.6rem;

    &:hover{
        background-color: black;
        color: white;
        transition-duration: .2s;
    }

    ${props => props.disabled ? `
        background-color: transparent;
        color: #363636;
        border: 2px solid #33636;
    ` : ''}
`;

const Input = styled.input`
    display: none;
    &:checked + ${Label} {
        background-color: #494949;
        color: #ffffff;

        &:hover {
            background-color: #000000;
        }
    }
`;

function RadioButton(props) {
    return(
        <Button>
            <Input
                id={props.value}
                type="radio"
                name={props.name}
                value={props.value}
                onClick={e => e.stopPropagation()}
                onChange={props.onChange}
                disabled={props.disabled}
                checked={props.checked}
            />
            <Label
                htmlFor={props.value}
                disabled={props.disabled}
            >
                {props.children}
            </Label>
        </Button>
    )
}


export default RadioButton;