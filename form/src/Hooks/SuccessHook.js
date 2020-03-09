import React, { Fragment, useContext } from 'react';
import M from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Card from '@material-ui/core/Card';
import Btn from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';

import FormContext from '../formContext';

const SuccessHook = () => {

  const formContext = useContext(FormContext);


  const { mainPage } = formContext;
  return (
    <M>
      <Fragment>
        <AppBar className='AppBar' title='Registration' />

        <div className="container">
          <Card className='card card-success'>
            <CardHeader title='Success!' />
            <CardContent >

              <h3 style={{ marginBottom: '1rem' }}>Thank You for Submittion</h3>

            </CardContent>
            <Btn style={{
              marginTop: '1rem', background: '#00c853'
            }} className='btn'
              variant="contained"
              color='primary'
              onClick={mainPage}>Main Page</Btn>
          </Card>
        </div>
      </Fragment>
    </M>
  )
}

export default SuccessHook
