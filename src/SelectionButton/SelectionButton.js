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

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media (hover: hover) {
        &:hover{
            background-color: #898989;
            color: white;
            transition-duration: .2s;
        }
    }
    @media (hover: none) {
        &:active{
            background-color: #898989;
            color: white;
            transition-duration: 0;
        }
    }
`;

const Input = styled.input`
    display: none;
    &:checked + ${Label} {
        background-color: #494949;
        color: #ffffff;

        @media (hover: hover) {
            &:hover {
                background-color: #000000;
                transition-duration: .2s;
            }
        }
        @media (hover: none) {
            &:active {
                background-color: #000000;
            }
        }
    }
`;

function SelectionButton(props) {
    return(
        <Button>
            <Input
                id={props.name + "-" + props.value}
                type="checkbox"
                name={props.name}
                value={props.value}
                onClick={e => e.stopPropagation()}
                onChange={props.onChange}
                checked={props.checked}
            />
            <Label
                htmlFor={props.name + "-" + props.value}
            >
                {props.children}
            </Label>
        </Button>
    )
}


export default SelectionButton;