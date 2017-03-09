import React,{Component} from 'react';

class CButton extends Component{
 render(){
    return <input type = "text" {...this.props}/>
 }
}

export default CButton;
