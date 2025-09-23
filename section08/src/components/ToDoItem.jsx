import "./ToDoItem.css";

const ToDoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
}) => {
  // 체크박스 상태 변화를 위한 이벤트 핸들러
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  return (
    <div className="ToDoItem">
      <input
        onChange={onChangeCheckBox}
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
