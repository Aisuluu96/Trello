import styled from 'styled-components';
import KolonkaTextArea from '../KolonkaTextArea';
import BtnAdd from '../BtnAdd';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { KolonkaListAction } from '../../../store/reducers/KolonkaListSlices';

function ModalBody(){
    const prevText = useSelector(state=>state.listItem.prevItem.text);
    const dispatch = useDispatch();

    const [value, setValue] = useState(prevText);

    const valueChangeHandler = (e)=>{
        setValue(e.target.value);
    }

    const submitValueHandler = ()=>{
        dispatch(KolonkaListAction.saveItem({
            text: value
        }));
    }

    const removeItem = ()=>{
        dispatch(KolonkaListAction.removeItemOrColumn());
    }


    return (
        <ModalBodyContent>
            <KolonkaTextArea value={value} onChange={valueChangeHandler} />
            <BtnAdd primary text="Удалить" onClick={removeItem} />
            <BtnAdd primary text="Сохранить" onClick={submitValueHandler} />
        </ModalBodyContent>
    )
}

const ModalBodyContent = styled.div`
    border: 1px solid #fff;
    width: 400px;
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0 auto;
`;


function Modal(){
    return (
        <ModalBlock>
            <ModalBody />
        </ModalBlock>
    )
}

export default Modal;

const ModalBlock = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 100vh;
    z-index: 10;
`;