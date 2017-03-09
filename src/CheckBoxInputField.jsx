import React, { Component } from 'react';

class CheckBoxInputField extends Component{
  /* render(){
      //return (<input type="checkbox" {...this.props} value={this.props.value}/>);
   }*/

   constructor(){
    super();
    this.state = {value:''};
    this.handleClick = this.handleClick.bind(this);
 }

 handleClick(e){
     //this.setState({ value : e})
     console.log(e.target.value)
 }

 render() {
  var	ele = this.props.list.map( function(data){
              return( <div>
                      <label>
                        <input type="checkbox" value = {data.value} />	{data.label}
                        </label>
                       </div>);
              });

              return (<div>	{ele}	</div>);
 }

}

export default CheckBoxInputField;
