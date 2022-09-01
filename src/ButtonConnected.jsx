import { useState } from "react";
import Button from "./Button";

export const actionClick = { type: "@clickAdd" };


//Reducer Function
export const reducer = (state = 0, action) => {
  switch (action.type) {
    case "@click":
      return state + 1; //action.payload;
    default:
      return state;
  }
};


const click = ( actualCount ) => (dispacth) =>{
  actionClick.payload = nro;
  return dispacth(actionClick);
}


const mapStateToProps = (state) => {
  return {
    clickCount: state
  };
};

const mapDispatchToProps = {
  onUserClick: click
};


const ButtonConnected = connect(mapStateToProps, mapDispatchToProps)(ReduxSample);

export default ButtonConnected;
