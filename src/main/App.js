import React from 'react';
import Rotas from './rotas';
import NavBar from '../components/navbar';

import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'toastr/build/toastr.min'

import 'bootswatch/dist/cerulean/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

class App extends React.Component {

  render() {
    return (
      <>
      <NavBar />
        <div className="container">
          <Rotas />
        </div>
      </>
    )
  }
}

export default App;
