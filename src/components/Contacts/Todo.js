import {useState } from 'react';

const Todo = ({ todo, todos, setTodos, handleEditTodos }) => {

  const [edit, setEdit] = useState(false);                 //textedit
  const [editValue, setEditValue] = useState(todo.text);

  const handleFocus = (event) => {
    event.target.select();
  };

  const deleteHandler = () => {                             // DELETE
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {                           // CHECKED: Todos içerisindeki checkbox tıklandığı zaman todosun tamamlandı (done) değeri güncelleniyor
    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        };
      }
      return item;
    })
    );
  };

  const handleEdit = () => {                              //textedit
    setEdit(true);
  };

  const handleSave = (id) => {
    setEdit(false);
    if (!/^ *$/.test(editValue)) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.text);
    }
  };

  const changeTodoText = (e) => {
    setEditValue(e.target.value);
  };

  if (edit) {
    return (
      <li>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave(todo.id);
          }}
        >
          <label>
            <input
              type="text"
              className="new-todo"
              style={{ padding: "0", margin: "0" }}
              value={editValue}
              name="editValue"
              onChange={changeTodoText}
              onFocus={handleFocus}
              autoFocus
            />
          </label>
        </form>
      </li>
    );
  } else {

  return (
    <div>
      <li className={`${todo.completed ? "completed" : ""}`}>
        <div className="viev">
          <input                                                       
            className="toggle"
            onClick={completeHandler}
            type="checkbox"
            property="completed"
          />
          <label onClick={handleEdit}>{todo.text}</label>
          <button onClick={deleteHandler} className="destroy">         
          </button>
        </div>
      </li>
    </div>
  )};
};

export default Todo;