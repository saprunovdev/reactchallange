const Colors = ({colors}) => {

    return(
        <main className="colorsWrapper">
            {colors.map((color)=>(
               <Color color = {color}/>
            ))}
        </main>
    )
}

const Color = ({color}) => {
    const style ={
        width: '100px',
        height: '100px',
        margin: '10px',
        textAlign: 'center',
        backgroundColor: color,
    }

    const handleClick =()=>{
        navigator.clipboard.writeText(color)

    }

    return(
        <div style={style}>
            <p>{color}</p>
            <button onClick={()=> handleClick()}>copy</button>
        </div>
    )
}

export default Colors;