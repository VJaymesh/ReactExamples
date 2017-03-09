import React,{Component} from 'react';

class CLabel extends Component{
 render(){
    return <input type = "label" {...this.props} value ={this.props.value}/>
 }
}

export default CLabel;
