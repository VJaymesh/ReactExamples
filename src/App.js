import React, { Component } from 'react';
import './App.css';
import CheckBoxInputField from './CheckBoxInputField';

class App extends Component {
  constructor(){
      super();
       this.fruitList = [ { label :'Apple', value:'Apple'},
                          { label :'Banana', value:'Banana'},
                          { label :'Orange', value:'Orange'} ];
    }

    render() {
        return <div className="widget">
            <CheckBoxInputField   list= {this.fruitList}
                                  onClick={this.handleClick}/></div>
    }

}

export default App;
