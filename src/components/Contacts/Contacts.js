import { useState, useEffect } from "react";
import "./Contacts.css";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Footer from "./Footer";
import Footerinfo from "./Footerinfo";

function Contacts() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([
    {
      "id": 1,
      "text": "Taste JavaScript",
      "completed": false
    },
    {
      "id": 2,
      "text": "Code furiously",
      "completed": false
    },
    {
      "id": 3,
      "text": "Promote Mavo",
      "completed": false
    },
    {
      "id": 4,
      "text": "Give talks",
      "completed": false
    },
    {
      "id": 5,
      "text": "Write tutorials",
      "completed": false
    },
    {
      "id": 6,
      "text": "Have a life!",
      "completed": false
    }
  ]);

  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [deleteCompleted, setDeleteCompleted] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    setCompletedCount(todos.filter((todo) => todo.completed === true).length);        // FOOTER -> CLEAR COMPLETED -> completed olan
    setActiveCount(todos.filter((todo) => todo.completed === false).length);          // FOOTER -> İTEM LEFT -> active olan sayısı
    filterHandler();                                                                  
  }, [todos, status]);

  useEffect(() => {                                                                  // CLEAR COMPLETED 
    if(deleteCompleted) {
      deleteCompletedTodos()
      setDeleteCompleted(false);
    }
  }, [deleteCompleted]);

  const filterHandler = () => {                                              // ALL - ACTİVE - COMPLETED
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
        default:
          setFilteredTodos(todos);
          break;
    }
  };

  const deleteCompletedTodos = () => {                                     // CLEAR COMPLETED -> completed olanları sil
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  return (
    <>
      <section className="todoapp">
        <Header />
        <Form 
          todos={todos}
          setTodos={setTodos}
          inputText={inputText} 
          setInputText={setInputText}
        />
        <List
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
        {todos.length != 0 && (
          <Footer 
          setStatus={setStatus} 
          setDeleteCompleted={setDeleteCompleted}
          completedCount={completedCount}
          activeCount={activeCount}
        />
        )}
      </section>
      <Footerinfo />
    </>
  );
}

export default Contacts;