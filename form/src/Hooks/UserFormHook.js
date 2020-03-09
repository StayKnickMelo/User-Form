import React, {useContext} from 'react';

import FormContext from '../formContext';

import FormUserDetailsHook from './FormUserDetailsHook';
import FormPersonalDetailsHook from './FormPersonalDetailsHook';
import ConfirmHook from './ConfirmHook';
import SuccessHook from './SuccessHook';



const UserFormHook = () => {

  const formContext = useContext(FormContext);

  const {step} = formContext;


  switch(step){
    case 1:
      return (<FormUserDetailsHook/>)
    case 2:
      return (<FormPersonalDetailsHook/>)
    case 3:
      return (<ConfirmHook/>)
    case 4:
      return (<SuccessHook/>)
    default: 
      return (<FormUserDetailsHook />)
  }
}

export default UserFormHook
