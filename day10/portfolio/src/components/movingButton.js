import { Component } from "react";

class MovingButton extends Component{
    state={
        x:0,
        y:0
    }

    moveButton = () =>{
        this.setState({x : (Math.round(Math.random() * 700))})
        this.setState({y : (Math.round(Math.random() * 400))})
    }

    render(){
        return(
            <button onMouseEnter={this.moveButton} style={{
                marginLeft:this.state.x,
                marginTop:this.state.y
                }}>
                X:{this.state.x} Y:{this.state.y}
            </button>
        )
    }

}

export {MovingButton}