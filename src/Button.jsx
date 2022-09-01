import { useState } from "react";

const Button = (props) => {   
  const { label } = props;
  const [ clickCount, setCount ] = useState(0)
  return (    

    <div>
      <p>You clicked { clickCount} times</p>
      <button onClick={()=>setCount(clickCount+1)}>{label}</button>
      </div>
  );

}

export default Button;
