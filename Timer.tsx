import { useState } from "react";

const Clock : React.FC = () =>{
  const [time, setTime] = useState(new Date()) ;

  setInterval(()=>{
    setTime(new Date())
  } , 1000)


  time.toLocaleString()
  return (
    <div>
      <h5> 현재시간 : {time.toLocaleTimeString()}</h5>
    </div>
  )
}

export default Clock ; 
