import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {text: inputText, completed: false, id: Math.random()}
    ]);
    setInputText("");
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <input
        className="new-todo"
        value={inputText}
        type="text"
        placeholder="What needs to be done?"
        onChange={inputTextHandler}
        autoFocus
      />
    </form>
  );
};
export default Form;