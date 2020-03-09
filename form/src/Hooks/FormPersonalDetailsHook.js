import React, { useContext, Fragment } from 'react';
import FormContext from '../formContext';

import M from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextFiled from '@material-ui/core/TextField';
import Btn from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

const FormPersonalDetailsHook = () => {

  const formContext = useContext(FormContext);

  const { city, bio, occupation, nextStep, prevStep, getInput, error, showAlert, showError } = formContext;


  const onClick = () => {

    if (city === '' || bio === '' || occupation === '') {
      showAlert('Please Fill In All Fields')
    } else {
      nextStep();
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
            <CardHeader title='Personal Information' />
            <TextFiled
              className='txtField'
              label='Occupation'
              defaultValue={occupation}
              variant="outlined"
              onChange={getInput('occupation')}
              margin='dense'
              error={showError}
               />

            <TextFiled
              className='txtField'
              label='City'
              defaultValue={city}
              variant="outlined"
              onChange={getInput('city')}
              margin='dense'
              error={showError}/>

            <TextFiled
              className='txtField'
              label='Bio'
              defaultValue={bio}
              variant="outlined"
              onChange={getInput('bio')}
              margin='dense'
              error={showError} />

            <div className="btns">
              <Btn style={{
                marginTop: '1rem', background: '#ff5252'
              }} className='btn'
                variant="contained"
                color='primary'
                onClick={prevStep}>Back</Btn>

              <Btn style={{
                marginTop: '1rem', background: '#00c853'
              }} className='btn'
                variant="contained"
                color='primary'
                onClick={onClick}>Continue</Btn>
            </div>

          </Card>
        </div>
      </Fragment>
    </M>
  )
}

export default FormPersonalDetailsHook
