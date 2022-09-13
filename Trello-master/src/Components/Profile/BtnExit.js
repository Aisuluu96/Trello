import styled from 'styled-components';

function BtnExit(props){
    return <BtnExitStyle onClick={props.onClick}></BtnExitStyle>;
}

export default BtnExit;


const BtnExitStyle = styled.button`
    border: none;
    /* padding: 10px; */
    color: red;
    cursor: pointer;
    position: relative;
    width: 40px;
    margin-left: 10px;
    &:after{
        content: '';
        position: absolute;
        width: 60%;
        height: 2px;
        background-color: #4F5355;
        left: 10px;
        transform: rotateZ(45deg);
    }
    &:before{
        content: '';
        position: absolute;
        width: 60%;
        height: 2px;
        background-color: #4F5355;
        left: 9px;
        transform: rotateZ(-45deg);
    }
`