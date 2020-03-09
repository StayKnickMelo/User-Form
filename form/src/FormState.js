
import React, { useReducer } from 'react';
import FormContext from './formContext';
import formReducer from './formReducer';
import {
  ADD_INPUT,
  NEXT,
  PREV,
  SHOW_ALERT,
  REMOVE_ALERT,
  MAIN_PAGE,
  SUCCESS,
  SET_LOADING
} from './types';

import axios from 'axios';

const FormState = (props) => {

  const initialState = {
    step: 1,
    loading: false,
    error: null,
    showError: false,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }

  const [state, dispatch] = useReducer(formReducer, initialState);

  const getInput = (input) => (e) => {

    dispatch({
      type: ADD_INPUT,
      payload: [input, e.target.value]
    })
  }

  const nextStep = () => {

    dispatch({
      type: NEXT
    })

  }

  const prevStep = () => {
    dispatch({
      type: PREV
    })

  }

  const mainPage = () => {

    dispatch({
      type: MAIN_PAGE
    })

  }
  const showAlert = (text) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT
      })
    }, 3000)

  }

  const submit = async (user) => {

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    setLoading();

    try {
      await axios.post('/api/userform/', user, config);

      dispatch({
        type: SUCCESS
      })

      console.log('User Added')

    } catch (err) {

      dispatch({
        type: SHOW_ALERT,
        payload: err.response.data.msg
      });

      setTimeout(() => {
        dispatch({
          type: REMOVE_ALERT
        })
      }, 3000);

      console.log(err.response.data.msg);

    }



  }

  const setLoading = ()=> {
    dispatch({
      type: SET_LOADING
    })
  }



  return (<FormContext.Provider
    value={{
      step: state.step,
      error: state.error,
      showError: state.showError,
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      occupation: state.occupation,
      city: state.city,
      bio: state.bio,
      loading: state.loading,
      getInput,
      nextStep,
      prevStep,
      showAlert,
      submit,
      mainPage
    }}>
    {props.children}

  </FormContext.Provider>)


}


export default FormState;