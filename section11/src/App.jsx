import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import {
  useRef,
  useReducer,
  useCallback,
  useMemo,
} from "react";
import { ToDoStateContext } from "./components/ToDoStateContext";
import { ToDoDispatchContext } from "./components/ToDoDisPatchContext";

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

// 실제로 처리하게 될 함수
// 액션 객체의 값에 따라 변화된 state의 값을 return
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      // action.data: dispatch 함수를 호출하면서 전달한 새로운 ToDo 아이템
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item,
      );
    case "DELETE":
      return state.filter(
        (item) => item.id != action.targetId,
      );
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      // 새롭게 생성할 ToDo 아이템을 객체로 삽입
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      <Header />
      <ToDoStateContext.Provider value={todos}>
        <ToDoDispatchContext.Provider
          value={memoizedDispatch}
        >
          <Editor />
          <List />
        </ToDoDispatchContext.Provider>
      </ToDoStateContext.Provider>
    </div>
  );
}

export default App;
