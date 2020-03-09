import React, { useContext, Fragment } from 'react';

import FormContext from '../formContext'

import M from 'material-ui/styles/MuiThemeProvider';
import Btn from '@material-ui/core/Button';
import AppBar from 'material-ui/AppBar';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

const FormUserDetailsHook = () => {

  const formContext = useContext(FormContext);

  const { firstName, lastName, email, nextStep, getInput, showAlert, error, showError } = formContext;

  
  const onClick = () => {
    const regEx = new RegExp(/\S+@\S+\.\S+/)
    if (firstName === '' || lastName === '' || email === '') {
      
      showAlert('Please Fill In All Fields')
    } else if (!email.match(regEx)) {
      showAlert('Invalid Email')

    } else {
      nextStep()
    }
  }


  return (

    <M>
      <Fragment>
        <AppBar className='AppBar' title='Registration' />
        <div className="container">
          {error && <Alert className='alert' variant='filled' severity='warning'>
            {error}
          </Alert>}
          <Card className='card'>
            <CardHeader title='User Details' />
            <TextField className='txtField'
              label='First Name'
              defaultValue={firstName}
              variant="outlined"
              onChange={getInput('firstName')}
              margin='dense'
              error={showError} />
            <TextField
              className='txtField'
              label='Last Name'
              variant="outlined"
              defaultValue={lastName}
              margin='dense'
              onChange={getInput('lastName')}
              error={showError} />
            <TextField
              className='txtField'
              label='Email'
              variant="outlined"
              defaultValue={email}
              margin='dense'
              onChange={getInput('email')}
              error={showError} />

            <Btn style={{
              marginTop: '1rem', background: '#00c853'
            }} className='btn'
              variant="contained"
              color='primary'
              onClick={onClick}>Continue</Btn>
          </Card>
        </div>
      </Fragment>
    </M>


  )
}

export default FormUserDetailsHook
