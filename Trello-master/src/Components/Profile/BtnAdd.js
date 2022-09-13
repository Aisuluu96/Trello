import styled, { css } from 'styled-components';

function BtnAdd(props) {
    return (
        <KolonkaAddBlock primary={props.primary} onClick={props.onClick}>{props.text}</KolonkaAddBlock>
    )
}

export default BtnAdd;

const KolonkaAddBlock = styled.button`
    background-color: #fff;
    text-align: left;
    padding: 10px;
    border-radius: 5px;
    /* width: 100%; */
    border: none;
    cursor: pointer;
    /* color: #ABB3BF; */
    &:hover{
        background-color: #F4F5F7;
    }
    ${(props) => props.primary && css`
        color: #fff;
        background-color: #026AA7;
        &:hover{
            background-color: #026AA7;
        }
    `}
`;