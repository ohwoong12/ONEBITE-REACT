import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef } from "react";

// 모조 데이터 선언
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos state의 값들 중에
    // targetId와 일치하는 id를 갖는 ToDo 아이템의 isDone 프로퍼티를 변경
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열만 전달

    setTodos(
      todos.map(
        (todo) =>
          todo.id === targetId
            ? { ...todo, isDone: !todo.isDone }
            : todo,
        // {
        //   if (todo.id === targetId) {
        //     return {
        //       // 일치한다면 스프레드 연산자로 기존 ToDo 아이템 갖고옴
        //       // isDone 프로퍼티의 값만 변경
        //       ...todo,
        //       isDone: !todo.isDone,
        //     };
        //   } else {
        //     // 일치하지 않는다면 원래 ToDo 아이템을 반환
        //     return todo;
        //   }
        //
      ),
    );
  };

  const onDelete = (targetId) => {
    // filter 메서드: 기존 배열에서 조건에 맞는 요소만 걸러내서 새로운 배열을 만듬
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    // 즉 삭제 대상이 아닌 요소들만 필터링한다는 뜻
    // 삭제되어야 하는 아이템만 제외한 새로운 배열을 만들어서 인수로 전달함 => 결과적으로 해당 아이템이 todos state에서 제거가 됨
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
