import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    gmail: 'admin@gmail.com',
    password: 'admin',
    bool: true,
    spiner: false,
    proverkaLogin: false,
    proLogin: false,
}

const AuthorizationSlices = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        toggle (state){
            console.log(state);
            state.bool = !state.bool
        },
        setSpiner(state) {
            state.spiner = true
        },

        endSpiner (state) {
            state.spiner = false
        },
        login (state, action) {

        
            if(state.gmail === action.payload.email && state.password === action.payload.password){
                state.proverkaLogin = true
                state.proLogin = false
            }else{
                state.proverkaLogin = false
                state.proLogin = true
            }
        
            
        },
        existUser(state){
            state.proverkaLogin = false
            state.proLogin = false
        }
        
    }
});

export const AuthorActions = AuthorizationSlices.actions;
export default AuthorizationSlices;

export const FetchUser = (data) => {
    
    return (dispatch) => {
        dispatch(AuthorActions.setSpiner())
        
        setTimeout(() => {
            dispatch(AuthorActions.login(data))
            dispatch(AuthorActions.endSpiner())
        }, 2000) 
    }
}

export const Exist = () => {
    return (dispatch) => {
        dispatch(AuthorActions.setSpiner())
        setTimeout(() => {
            dispatch(AuthorActions.existUser())
            dispatch(AuthorActions.endSpiner())
        }, 2000) 
    }
}