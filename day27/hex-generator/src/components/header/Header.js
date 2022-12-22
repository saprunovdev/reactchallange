import React, {useRef} from 'react';
import generateColor from '../utils/GenerateColor';
import gsap from 'gsap';

const Header = ({setNumber, setColor}) =>{
    const ref = useRef(null)

    const generate = () =>{
        let value = parseInt(ref.current.value)

        if(typeof value === 'number' && value > 0 && value < 5000){
            let colorsArray = []

            setNumber(value)

            for(let i = 0; i < value; i++){
                colorsArray.push(generateColor())
            }
            setColor(colorsArray)
            
            

        }else{
            alert('plese input number, which is greater than 0 and less then 5000')
        }  
    }

    return(
        <header>
            <h1>Hexadecimal Colors</h1>
            <div>
                <input type='text' placeholder='Num of colors' ref={ref} />
                <button onClick={generate}>generate</button>
            </div>
        </header>
    )
}

export default Header;