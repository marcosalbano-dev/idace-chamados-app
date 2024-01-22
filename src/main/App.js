import React from 'react';
import Rotas from './rotas';

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'
import NavBar from '../components/navbar';


class App extends React.Component {

  render() {
    return (
      <>
      <NavBar />
        <div className='container'>
          <Rotas />
        </div>
      </>
    )
  }
}

export default App;
