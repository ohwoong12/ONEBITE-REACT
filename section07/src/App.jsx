import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // 라이프사이클의 생애주기
  // 1. 마운트: 탄생
  // 2. 업데이트 : 변화, 리렌더링
  // 3. 언마운트: 죽음

  

  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);

  const onClickButton = (value) => {
    setCount(count + value);
  };
  const onClickInit = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller
          onClickButton={onClickButton}
          onClickInit={onClickInit}
        />
      </section>
    </div>
  );
}

export default App;
