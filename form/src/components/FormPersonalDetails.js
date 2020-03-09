import React, { Component } from 'react';

import M from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Btn from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {

  render() {

    const { nextStep, prevStep, handleChange, values } = this.props;

    return (
      <M>
        <AppBar className='AppBar' title='User Personal Details' />
        <div className='container'>
          <TextField hintText={`What's your occupation?`}
          floatingLabelText='Occupation'
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}/>

          <TextField hintText={`The city where you live`}
          floatingLabelText='City'
          onChange={handleChange('city')}
          defaultValue={values.city}/>

          <TextField hintText='Tell us something about yourself'
          floatingLabelText='Bio'
          onChange={handleChange('bio')}
          defaultValue={values.bio}/>

          <div className='btns'>
            <Btn
              label='Back'
              primary={false} 
              onClick={prevStep}/>

            <Btn
              label='Continue'
              primary={true}
              onClick={nextStep} />
          </div>




        </div>

      </M>

    )
  }
}

export default FormPersonalDetails
