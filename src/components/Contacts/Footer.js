import React from "react";

const Footer = ({setStatus, setDeleteCompleted, completedCount, activeCount}) => {

  const statusHandler = (e) => {                     // ALL - ACTİVE - COMPLETED: All, Active, Completed filtre butonlarına tıklandığı zaman 
    setStatus(e.target.attributes.value.value);       //                            tıklanan butona göre listelenen içerikler yenileniyor.
  };

  const clearCompleted = () => {                     // CLEAR COMPLETED: Tamamlanmış tüm todosları todos state'inden temizliyor.
    setDeleteCompleted(true);
  };
  
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
        <strong>{activeCount}</strong> item left
        </span>

        <ul className="filters" >
          <li>
            <a className="selected" value="all" onClick={statusHandler}>All</a>
          </li>
          <li>
            <a value="active" onClick={statusHandler}>Active</a>
          </li>
          <li>
            <a value="completed" onClick={statusHandler}>Completed</a>
          </li>
        </ul>

        {completedCount>0 && (
          <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
          </button>
        )}
      </footer>
    </div>
  );
}

export default Footer;