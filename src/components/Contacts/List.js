import { useState } from "react";
import Todo from "././Todo";

const List = ({ todos, setTodos, filteredTodos }) => {

  const [completedCondition, setCompletedCondition] = useState(true);      // Mark all as complete
  const changeAllCompleted = () => {     
    changeElements();          
    setTodos(todos.map((item) => {
      return {
        ...item, completed: completedCondition
      };
    })
    );
    setCompletedCondition(!completedCondition);
  };

  const changeElements = () => {
    var toggleElements = document.getElementsByClassName("toggle");
    for(var i=0; i<toggleElements.length; i++) {
      toggleElements[i].checked = completedCondition;
    }
  };

  const handleEditTodos = (editValue, id) => {      // textedit
		const newTodos = [...todos]
		newTodos.forEach((todo) => {
			if(todo.id === id){
				todo.text = editValue
			}
		})
		setTodos(newTodos)
	};

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox"/>
      <label htmlFor="toggle-all" onClick={changeAllCompleted}>
        Mark all as complete
      </label>
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
           todos={todos}
           setTodos={setTodos}
           key={todo.id} 
           todo={todo}
           text={todo.text} 
           handleEditTodos={handleEditTodos}
          />
        ))}
      </ul>
    </section>
  );
};

export default  List;