
import Button from "./Button";
import { click } from "../actions/index";
import { connect } from "react-redux";




const mapStateToProps = (state) => {

  return {
    clickCount: state
  };
};

const mapDispatchToProps =  {
    click,
};


const ButtonConnected = connect(mapStateToProps, mapDispatchToProps)(Button);

export default ButtonConnected;
