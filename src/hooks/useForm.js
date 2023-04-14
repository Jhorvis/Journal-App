import { useState } from 'react'

export const useForm = (parametros = {}, formValidate = []) => {

  const [state, setState] = useState(parametros)

  const onInputChage = ({target}) =>{
   const {name, value} = target;  
   setState({
      ...state,
      [name]: value,
   })
  }

  const onResetForm = () => {
    setState(parametros)
  }


   
  return {
      ...state,
      state,
      onInputChage,
      onResetForm

  }
}
