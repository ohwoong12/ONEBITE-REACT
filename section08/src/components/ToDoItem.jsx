import "./ToDoItem.css";

const ToDoItem = ({ id, isDone, content, date }) => {
  return (
    <div className="ToDoItem">
      <input
        readOnly
        className="checkbox"
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <div className="delete">임시 삭제</div>
    </div>
  );
};

export default ToDoItem;
