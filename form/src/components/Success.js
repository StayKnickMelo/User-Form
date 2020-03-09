import React, { Component } from 'react';

import M from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';

class Success extends Component {
  render() {
    return (
      <M>
        <AppBar className='AppBar' title='Success!'/>
        <div className="container">
          <h1>Congradulations! Your Form Has Been Submited</h1>
        </div>
      </M>
      
    )
  }
}

export default Success
