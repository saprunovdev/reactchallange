import { Component } from 'react';
import { Clock } from '../components/Clock';
class Footer extends Component{

    render(){
        return(
            <div className='footer'>
                <div>
                    <p>&copy; Saprunov.dev</p>
                </div>

                <div>
                    <Clock/>
                </div>
            </div>
        )
    }
}
export default Footer;