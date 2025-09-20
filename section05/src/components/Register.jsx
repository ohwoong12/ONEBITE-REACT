// 간단한 회원가입 form
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // 우선 사용자가 이름 입력을 제대로 했는지 체크
  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스 (선택된 상태로 만들기)
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        name="name"
        value={input.name}
        onChange={onChange}
        placeholder={"이름"}
      />
      <div />

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select
          name="country"
          value={input.country}
          onChange={onChange}
        >
          <option value={""}></option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"uk"}>영국</option>
        </select>
      </div>
      <div>
        <textarea
          name="bio"
          cols="30"
          rows="10"
          value={input.bio}
          onChange={onChange}
        ></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
