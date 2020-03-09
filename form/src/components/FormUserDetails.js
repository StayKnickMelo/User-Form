import React, { Component} from 'react';

import M from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Btn from 'material-ui/RaisedButton';

class FormUserDetails extends Component {

  continue = (e) => {
    e.preventDefault();

    const { nextStep } = this.props;

    nextStep();



  }


  render() {
    const { values, handleChange } = this.props;

    return (
      <M>
        <AppBar className='AppBar' title='Enter User Details' />
        <div className='container'>
          <TextField hintText='Enter First Name'
            floatingLabelText='First Name'
            onChange={handleChange('firstName')}
            defaultValue={values.firstName} />

          <TextField hintText='Enter Last Name'
            floatingLabelText='Last Name'
            onChange={handleChange('lastName')}
            defaultValue={values.lastName} />

          <TextField hintText='Enter Email'
          floatingLabelText='Email'
          onChange={handleChange('email')}
          defaultValue={values.email}/>


          <Btn
          label='Continue'
          primary={true}
          style={styles.button}
          onClick={this.continue} />

        </div>

      </M>

    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default FormUserDetails

