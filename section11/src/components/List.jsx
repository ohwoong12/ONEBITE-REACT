import "./List.css";
import ToDoItem from "./ToDoItem";
import { ToDoContext } from "./ToDoContext";
import { useState, useMemo, useContext } from "react";

const List = () => {
  const { todos } = useContext(ToDoContext);
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
        // 소문자로 변환 후 검색한 내용만 필터링
        todo.content
          .toLowerCase()
          .includes(search.toLowerCase()),
      );
    }
  };

  const filteredTodos = getFilteredData();

  // const getAnalyzedData = () => {
  //   // 현재 등록된 ToDo 아이템의 개수를 저장
  //   const totalCount = todos.length;
  //   // 전체 ToDo들 중에 완료된 ToDo의 개수를 저장
  //   // filter 메서드를 사용하여 isDone 프로퍼티가 참인 값만 필터링
  //   const doneCount = todos.filter(
  //     (todo) => todo.isDone,
  //   ).length;
  //   const notDoneCount = totalCount - doneCount;

  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };

  // 기존에 따로 구조 분해 할당은 없앤 후 바로 받아옴
  const { totalCount, doneCount, notDoneCount } =
    useMemo(() => {
      console.log("연산 실행!");

      // 현재 등록된 ToDo 아이템의 개수를 저장
      const totalCount = todos.length;
      // 전체 ToDo들 중에 완료된 ToDo의 개수를 저장
      // filter 메서드를 사용하여 isDone 프로퍼티가 참인 값만 필터링
      const doneCount = todos.filter(
        (todo) => todo.isDone,
      ).length;
      const notDoneCount = totalCount - doneCount;

      return {
        totalCount,
        doneCount,
        notDoneCount,
      };
    }, [todos]);
  // 두번째 인수: 의존성 배열 (deps)
  // deps의 값이 비어있다면 처음에 컴포넌트가 렌더링 될때 딱 한번만 실행
  // deps의 값이 변했을 때만 콜백 함수를 다시 실행함
  // deps 배열을 아예 생략하면 리렌더링 될 때마다 실행함
  //  => 쓰는 의미가 없음

  // 콜백 함수가 반환하는 값을 useMemo가 다시 그대로 반환해줌

  // const { totalCount, doneCount, notDoneCount } =
  //   getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              {...todo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
