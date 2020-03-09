import React from 'react';
import './App.css';


// Comp class
// import UserForm from './components/UserForm';

// Context API
import FormState from './FormState'
import UserFormHook from './Hooks/UserFormHook';

function App() {
  return (
    <div className="App">
      <FormState>
        <UserFormHook />

      </FormState>
      {/* <UserForm/> */}

    </div>
  );
}

export default App;
