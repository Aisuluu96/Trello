import  { useEffect, useState } from 'react';

export const  ValidInput = (state)  =>  {
    const [value, setValue] = useState('');
    const [isValue, setIsValue] = useState(false);
    const [isBlur, setIsBlur] = useState(false);


    let isValid = state(value);

    useEffect(() => {
        if(isValid && isBlur){
            setIsValue(true)
        }else{
            setIsValue(false)
        }
    }, [value, isValid, isBlur])

    const resetValue = () => {
        setValue('');
        setIsBlur(false)
    }

    
    const inputBlur = ()=>{
        setIsBlur(true)
    }

    const inputValue = (e) => {
        setValue(e.target.value);
    }



  return {
      value,
      inputValue,
      isValue,
      inputBlur,
      resetValue,
  }
}


