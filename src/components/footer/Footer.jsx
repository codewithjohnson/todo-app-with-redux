import { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [todosStatus, setTodosStatus] = useState("all");
  const handleTodosStatusChange = (e) => {
    setTodosStatus(e.target.value);
  };

  return (
    <footer className="footer">
      <TodoActions />
      <FilterTodosByStatus
        handleTodosStatusChange={handleTodosStatusChange}
        todosStatus={todosStatus}
      />
      <CountTodosStatus />
    </footer>
  );
};

const TodoActions = () => {
  return (
    <div className="footer__actions">
      <h3>actions</h3>
      <button>mark all completed</button>
      <button>clear completed</button>
    </div>
  );
};

const CountTodosStatus = () => {
  return (
    <div className="footer__countTodoStatus">
      <h3 className="footer__countTodoStatus__title">Todos Status Tracker</h3>
      <div className="todos-status-count">
        <div className="all-todos-count">
          <div className="up">
            <span className="all-todos-count-title">all</span>
            <span className="material-symbols-outlined">
              line_end_arrow_notch
            </span>
          </div>
          <span className="all-todos-count-value">23</span>
        </div>
        <div className="active-todos-count">
          <div className="up">
            <span className="active-todos-count-title">active</span>
            <span className="material-symbols-outlined">
              line_end_arrow_notch
            </span>
          </div>
          <span className="active-todos-count-value">23</span>
        </div>
        <div className="completed-todos-count">
          <div className="up">
            <span className="completed-todos-count-title">completed</span>
            <span className="material-symbols-outlined">
              line_end_arrow_notch
            </span>
          </div>
          <span className="completed-todos-count-value">23</span>
        </div>
      </div>
    </div>
  );
};

const StatusToggle = ({
  classname,
  name,
  id,
  todosStatus,
  handleTodosStatusChange,
}) => {
  return (
    <div className={classname}>
      <input
        type="radio"
        name={name}
        id={id}
        value={id}
        checked={todosStatus === id}
        onChange={handleTodosStatusChange}
      />
      <label htmlFor={id}>{id}</label>
    </div>
  );
};

const FilterTodosByStatus = ({ todosStatus, handleTodosStatusChange }) => {
  return (
    <div className="footer__todoFilterbyStatus">
      <h3 className="footer__todoFilterbyStatus__title">filter by status</h3>
      <div className="footer__todoFilterbyStatus__toggles">
        <StatusToggle
          classname={"selectAll"}
          id={"all"}
          name={"status"}
          todosStatus={todosStatus}
          handleTodosStatusChange={handleTodosStatusChange}
        />
        <StatusToggle
          classname={"selectActive"}
          id={"active"}
          name={"status"}
          todosStatus={todosStatus}
          handleTodosStatusChange={handleTodosStatusChange}
        />
        <StatusToggle
          classname={"selectCompleted"}
          id={"completed"}
          name={"status"}
          todosStatus={todosStatus}
          handleTodosStatusChange={handleTodosStatusChange}
        />
      </div>
    </div>
  );
};

export default Footer;
