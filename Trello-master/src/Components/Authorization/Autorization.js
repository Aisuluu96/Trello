import styled, { createGlobalStyle } from "styled-components";
import { ValidInput } from "../hooks/ValidInput";
import { FetchUser } from "../../store/reducers/LoginSlices";
import { useDispatch, useSelector } from 'react-redux';

const Authorization = (props) => {
    const dispatch = useDispatch()
    const {proverkaLogin, proLogin} = useSelector(state => state.user)
    const store = useSelector(state => state.user.bool)
    // console.log(store);
    const {
        value: emailValue,
        inputValue: emailInput,
        isValue: emailsValue,
        inputBlur: emailBlur,
        resetValue: emailReset

    } = ValidInput((value) => {
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        if (validEmailRegex.test(value)) {
            return false;
        } else {
            return true;
        }
    });



    const {
        value: passwordValue,
        inputValue: passwordInput,
        isValue: passwordIsValue,
        inputBlur: passwordBlur,
        resetValue: passwordReset

    } = ValidInput((value) => {
        if (value.trim().length < 5 || value.trim() === '') {
            return true;
        } else {
            return false;
        }
    });

    // console.log(passwordIsValue);



    const submitForm = (e) => {
        
        e.preventDefault();
        if (emailValue === '' || passwordValue === '') {
            emailBlur();
            passwordBlur();
            return;
            
        }
        dispatch(FetchUser({
            email: emailValue,
            password: passwordValue
        }))

        if (emailsValue || passwordIsValue || emailValue === '' || passwordValue === '') {
            return
        } else {
            emailReset();
            passwordReset();
        }
    }
    let ErrorLogin =<P>Аккаунтта с таким адресом электронной почты не существует</P>;
    let error = !proverkaLogin && proLogin



    return <section className="cont" onSubmit={submitForm}>
        <Div>
            <H1><Image src="https://cdn-icons-png.flaticon.com/512/6124/6124991.png"/>Trello</H1>

            <Cont>
                <Form>

                    <div>
                        <h1>Вход Trello</h1>
                        {error && ErrorLogin}
                        <div className={`${emailsValue ? "error" : ""}`}>
    
                        <Input onBlur={emailBlur} type="text" value={emailValue} onChange={emailInput} placeholder='Укажите адрес электронной почты...' />
                        {emailsValue && <P>Отсутствует адрес электронной почты</P>}
                        </div>
                        <div className={`${passwordIsValue ? "error" : ""}`}>

                            <Input onBlur={passwordBlur} type="password" value={passwordValue} onChange={passwordInput} placeholder='Введите пароль...'   />
                            {passwordIsValue && <P3>Пароль должен состоять максимум из 5 символов</P3>}
                        </div>

                    </div>
                    <div className='but'>
                        <Button>Войти</Button>
                    </div>
                    <div>
                        
                        
                       
                        <hr/>
                        

                    </div>
                    <Img />

                </Form>
               
                
            </Cont>

        

        </Div>
    </section>
}       


export default Authorization

const Cont = styled.div`
width: 100%;
display: flex;
justify-content: center;
height: auto;
`

const P = styled.p`
color: red;
margin: 0;

`

const DivError = styled.div`
border: 1px solid red;
`

const P3  = styled.p`
color: red;
font-size: 15px
`

const P1 = styled.p`
color: blue;
font-size: 13px;
padding: 0;
`

const Img = createGlobalStyle` 
body{
    min-height: 100vh;

          
    background-repeat: no-repeat;
    background-size: 30%, 30%, 100%;
    background-color: #F9FAFC;
}
`


const Form = styled.form`
-webkit-box-shadow: 0px 0px 19px 5px rgba(64, 58, 58, 0.72);
box-shadow: 0px 0px 13px -4px black;
width: 400px;
padding: 40px 40px 0px 40px;
background-color: white;
`

const Div = styled.div`
display: flex;
align-items: center;
/* height: 100vh; */
justify-content: center;
flex-flow: row wrap;
`

const Input = styled.input`
    width: 100%;
    height: 50px;
    margin-top: 20px;
    font-family: inherit;
    padding: 0 20px 0 20px;
    &:focus{
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    outline: none;
    }
   &.error{
        border: 1px solid red;
    }
 
`


const Button = styled.button`
width: 100%;
background-color: #5AAC44;
margin-top: 20px;
height: 35px;
border: none;
border-radius: 3px;
color: white;
`


const Div1 = styled.div`
/* -webkit-box-shadow: 0px 0px 19px 5px rgba(220, 220, 220); */
box-shadow: 0px 0px 7px 2px rgba(220, 220, 220); 
width: 100%;
height: 40px;
text-align: center;
font-family: arial;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
font-family: inherit;
color: blue;

`

const Image = styled.img`
width: 25px;
height: 25px;

`

const Img1 = styled.img`
    width: 220px;
    height: 100px;  
`

const H1 = styled.h1`
width: 100%;
font-size: 34px;
padding-left: 5px;

`

