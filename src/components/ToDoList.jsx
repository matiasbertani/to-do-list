import ToDo from "../components/ToDo";


const ToDoList = ({toDos}) => {   
  
	const makeToDos = (toDos) => {
			return toDos.map(
							toDo => {<ToDo taskName={toDo.taskName} />
				}
			)
  }

  return (    
    <ul className="row">
      {makeToDos(toDos)}
    </ul>
  );

}

export default ToDoList;
