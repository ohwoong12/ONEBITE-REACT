import "./Editor.css";
import { useState, useRef, memo, useContext } from "react";
import { ToDoContext } from "./ToDoContext";

const Editor = () => {
  const { onCreate } = useContext(ToDoContext);
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      alert("입력된 값이 없습니다!");
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 ToDo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default memo(Editor);
