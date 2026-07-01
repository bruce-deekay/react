import { useState } from "react"

export const AlertCard = ({result, children}) => {
    const[show, setShow]=useState(true);
  return (
    <div className={show ? "" : "hidden"}>
        <div className={`alert ${result}`}>
            {/* the above method is for passing test and dynamic content */}
            {children}
            <button onClick={()=> setShow(!show)} className="trigger">Hide</button>
        </div>
    </div>
    
  )
}

