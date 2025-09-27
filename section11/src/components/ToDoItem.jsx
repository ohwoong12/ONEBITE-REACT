import "./ToDoItem.css";
import { memo, useContext } from "react";
import { ToDoContext } from "./ToDoContext";

const ToDoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(ToDoContext);

  // 체크박스 상태 변화를 위한 이벤트 핸들러
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
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
      <div className="delete">
        <button onClick={onClickDeleteButton}>삭제</button>
      </div>
    </div>
  );
};

// 고차 컴포넌트 (HOC)
// 한번 호출하는 것만으로도 컴포넌트에 새로운 기능 부여 가능
// export default memo(ToDoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // True -> Props 바뀌지 않음 -> 리렌더링X
//   // False -> Props 바뀜 -> 리렌더링 O

//   // onUpdate와 onDelete 말고 ToDo 아이템의 상태를 가리키는 id, isDone, content, date만 체크
//   if (
//     prevProps.id != nextProps.id ||
//     prevProps.isDone != nextProps.isDone ||
//     prevProps.content != nextProps.content ||
//     prevProps.date != nextProps.date
//   )
//     return false;

//   return true;
// });

export default memo(ToDoItem);
