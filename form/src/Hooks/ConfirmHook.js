import React, { useContext, Fragment} from 'react';

import FormContext from '../formContext';

import M from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import Btn from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import ListItemText from '@material-ui/core/ListItemText';
import CardHeader from '@material-ui/core/CardHeader';
import Alert from '@material-ui/lab/Alert';




const ConfirmHook = () => {

  const formContext = useContext(FormContext);

  const { firstName, lastName, bio, city, email, occupation, nextStep, prevStep, submit, error, showAlert } = formContext;


  

  const onClick = () => {

    if (error) {
      showAlert(error)
      
    } else {
      const user = {
        firstName,
        lastName,
        email: email.toLowerCase(),
        city,
        occupation,
        bio
      }

      submit(user);


    }



  }

  return (
    <M>
      <Fragment>
        <AppBar className='AppBar' title='Registration' />
        <div className="container">
          {error && <Alert className='alert' variant='filled' severity='error'>
            {error}
          </Alert>}
          <Card className="card card-confirm">
            <CardHeader title='Confirm Your Information' />
            <List >
              <ListItem
                primaryText='First Name'
                secondaryText={firstName} />
              <ListItem
                primaryText='Last Name'
                secondaryText={lastName} />
              <ListItem
                primaryText='Email'
                secondaryText={email} />
              <ListItem
                primaryText='City'
                secondaryText={city} />
              <ListItem
                primaryText='Occupation'
                secondaryText={occupation} />
              <ListItemText
                primary='Bio'
                secondary={bio}
              />
            </List>
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

export default ConfirmHook
