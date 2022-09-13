import styled from "styled-components";
import TodoKolonka from "./TodoKolonka";
import BtnAdd from "./BtnAdd";
import InputHeaderKolonka from "./InputHeaderKolonka";
import { useState } from "react";
import BtnExit from "./BtnExit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { KolonkaListAction } from "../../store/reducers/KolonkaListSlices";

function TodoList() {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const searchValue = useSelector(state=>state.listItem.searchValue);
    const store = useSelector(state => state.listItem.columns);

    let columns = store.filter((elem)=>{
        return elem.header.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });

    const inputHandleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleShow = () => {
        if (showInput) {
            dispatch(KolonkaListAction.addKolonka({
                id: Math.random(),
                header: inputValue,
                items: []
            }));
            setInputValue('');
            removeShow();
        } else {
            setShowInput(true);
        }
    }

    const removeShow = ()=>{
        setShowInput(false);
    }

    return (
        <TodoListBlock>
            {
                columns.map((elem) => {
                    return <TodoKolonka key={elem.id} header={elem.header} columnId={elem.id} />
                })
            }
            <BtnCont>
                {
                    showInput && <InputHeaderKolonka value={inputValue} onChange={inputHandleChange} />
                }
                <BtnBlock>
                    <BtnAdd onClick={handleShow} text="+ Добавить колонку" primary={true} />
                    {
                        showInput && <BtnExit onClick={removeShow} />
                    }
                </BtnBlock>
            </BtnCont>
        </TodoListBlock>
    )
}
export default TodoList;

const BtnBlock = styled.div`
    display: flex;
`

const BtnCont = styled.div`
    /* border: 1px solid red; */
    padding: 5px;
    /* background-color: red; */
    display: flex;
    background-color: #EBECF0;
    flex-flow: column nowrap;
    width: 250px;
`;

const TodoListBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-flow: row nowrap;
    align-items: flex-start;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 60px;
    position: absolute;
    z-index: 1;
`;