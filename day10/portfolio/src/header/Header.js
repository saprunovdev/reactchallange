import { Component } from 'react';
import { Button } from '../components/Button'

class Header extends Component{
    //I passed the function from parent 'App' to the 'Header' and then used it here
    changeTheme = this.props.changeTheme

    render(){
        return(
            <div className='header'>
                <div>
                <h1>Portfolio page</h1>
                </div>
                <div className='y-center'>
                <Button action = {this.changeTheme} value = 'Change '/>
                </div>
                
            </div>
        )
    }
}

export default Header;