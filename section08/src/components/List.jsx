import "./List.css";
import ToDoItem from "./ToDoItem";
import { useState } from "react";

const List = ({ todos }) => {
  const [search, setSearch] = useState("");

  // 매개변수로 이벤트 객체를 받아서 setSearch를 호출
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    } else {
      return todos.filter((todo) =>
        todo.content
          .toLowerCase()
          .includes(search.toLowerCase()),
      );
    }
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <ToDoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
