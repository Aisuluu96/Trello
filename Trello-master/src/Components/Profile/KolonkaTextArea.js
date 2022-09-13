import styled from "styled-components";

function KolonkaTextArea(props) {
    return <KolonkaTextAreaBlock value={props.value} onChange={props.onChange} type="text" placeholder="Ввести текст"></KolonkaTextAreaBlock>
}

export default KolonkaTextArea;

const KolonkaTextAreaBlock = styled.textarea`
    width: 100%;
    margin-bottom: 10px;
    min-height: 100px;
    border: none;
    padding: 10px;
    &:focus{
        outline: none;
    }
`;