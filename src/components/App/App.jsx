import React, { Component } from 'react';
import css from './App.module.css';

import { Title } from 'components/Title/Title';
import { Buttons } from 'components/Buttons/Buttons';
import { Reset } from 'components/Reset/Reset';

class App extends Component {
  state = {
    red: 'red',
    blue: 'blue',
    green: 'green',
    purple: 'purple',
    isResetDisabled: true,
  };

  onBgColorChange = event => {
    this.setState(prevState => ({ isResetDisabled: false }));
    document.body.style.backgroundColor = event.target.textContent;
  };

  onColorReset = () => {
    this.setState(prevState => ({ isResetDisabled: true }));
    console.log('rerr');
    document.body.style.backgroundColor = 'white';
  };

  render() {
    const { red, blue, green, purple, isResetDisabled } = this.state;
    return (
      <div className={css.conteiner}>
        <Title title="Background color changer" />
        <Buttons
          buttons={[red, blue, green, purple]}
          onBgColorChange={this.onBgColorChange}
        />
        <Reset onColorReset={this.onColorReset} disabled={isResetDisabled} />
      </div>
    );
  }
}

export default App;
