import { connect } from "react-redux";
import ShowText from "../components/ShowText";

const mapStateToProps = (state) => {
  
  return {
    clickCount: state.clickCount
  }

}

const ShowTextConnected = connect(mapStateToProps)(ShowText)
export default ShowTextConnected;
