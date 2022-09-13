import styled from 'styled-components';

function InputHeaderKolonka(props){
    return (
        <Input type="text" value={props.value} onChange={props.onChange} placeholder="Ввести заголовок списка" />
    )
}

export default InputHeaderKolonka;

const Input = styled.input`
    padding: 10px 20px;
    margin-bottom: 10px;
    &:focus{
        border-color: blue;
        outline-color: blue;
    }
`