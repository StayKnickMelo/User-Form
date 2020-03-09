import React, { Component } from 'react';

import M from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List'
import Btn from 'material-ui/RaisedButton';



class Confirm extends Component {


  post = () => {
    const { nextStep, values } = this.props;
    // PROCESS FORM TO API ///

    console.log(values)

    nextStep();

  }
  render() {

    const { prevStep, values } = this.props;
    const {
      firstName,
      lastName,
      occupation,
      city,
      email,
      bio

    } = values;

    return (
      <M>
        <AppBar className='AppBar' title='Confirm Your Information' />
        <div className="container">
          <List>
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

            <ListItem
              primaryText='Bio'
              secondaryText={bio} />

          </List>



          <div className='btns'>
            <Btn
              label='Back'
              primary={false}
              onClick={prevStep} />

            <Btn
              label='Submit'
              primary={true}
              onClick={this.post} />

          </div>

        </div>


      </M>

    )
  }
}

export default Confirm
