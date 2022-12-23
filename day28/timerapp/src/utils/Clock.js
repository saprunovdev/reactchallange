import { useState, useEffect} from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)

    })

    return(
        <div>
            <h1 className="timer">{time}</h1>
        </div>
    )
}

export default Clock;