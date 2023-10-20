import React, { Component } from 'react';

import Title from 'components/Title/Title';
import { Buttons } from 'components/Buttons/Buttons';

class App extends Component {
  state = {
    red:'red',
    blue:'blue',
    green:'green',
    purple:'purple'
  };

  render() {
    const {red,blue, green, purple} = this.state
    return(
      <>
      <Title title="Background color changer"/>
      <Buttons buttons= {[red, blue,green,purple]}/>
      </>
    )
  }
}

export default App;
