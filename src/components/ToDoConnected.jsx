import ToDoList from "../components/ToDoList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  
  return {
    toDos: state.toDos,
  };
};

const ToDoListConnected = connect(mapStateToProps)(ToDoList);
export default ToDoListConnected;
