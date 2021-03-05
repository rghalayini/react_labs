import React, {Component} from 'react';
import './App.css';
import Slider from './components/Slider';
import Roster from './components/Roster';
import details from './details';

class App extends Component {
  constructor(){
    super()
    this.state={ epOnFocus : 0 }
    this.changeEp = (ep) =>{
      this.setState({epOnFocus:ep})
    }
  }


  render(){
    return (
      <div className='App'>
        <Slider updateFunc={this.changeEp} focusedEp={this.state.epOnFocus}/>
        <Roster />

      </div>
    )
  }
}

export default App;
