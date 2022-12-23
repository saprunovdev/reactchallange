import { useState } from "react";

const Calendar = () =>{
    const [date, setDate] = useState(new Date().getMonth())
    return(
        <div>
            <h1>This is calendar part</h1>
        </div>
    )
}

export default Calendar;