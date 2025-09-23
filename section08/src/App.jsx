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

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
