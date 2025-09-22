import "./ToDoItem.css";

const ToDoItem = () => {
  return (
    <div className="ToDoItem">
      <input className="checkbox" type="checkbox" />
      <div className="content">임시 Todo</div>
      <div className="date">임시 Date</div>
      <div className="delete">임시 삭제</div>
    </div>
  );
};

export default ToDoItem;
