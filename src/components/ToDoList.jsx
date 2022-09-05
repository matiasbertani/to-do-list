import ToDo from "../components/ToDo";


const ToDoList = (toDos) => {   
  
	const makeToDos = (toDos) => {
			return toDos.map(
							toDo => {<ToDo taskName={toDo.taskName} />
				}
			)
  }

  return (    
    <ul className="row">
      <p>{taskName}</p>
    </ul>
  );

}

export default ToDoList;
