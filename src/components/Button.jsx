import { useState } from "react";

const Button = (props) => {   
  const { label , click} = props;

  return (    
    <div>
      <button onClick={()=>click()}>{label}</button>
    </div>
  );

}

export default Button;
