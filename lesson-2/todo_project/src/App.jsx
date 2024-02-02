import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [Data, setData] = useState([]);
  const [text, setText] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        let data = await axios.get("http://localhost:3000/todo");
        let test = data.data.data;

        setData([...Data, ...test]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(Data);
  const handleChange = (e) => {
    let text = e.target.value;
    setText(text);
  };

  const handleClick = () => {
    setData([...Data, text]);
    setText("");
  };
  console.log(Data);
  return (
    <>
      <div>
        <input
          type="text"
          name="todo"
          value={text}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button onClick={handleClick}> add click</button>
      </div>
      <div>
        {Data.length > 0 ? (
          Data.map((el) => <li>{el.TodoName}</li>)
        ) : (
          <p>data is null</p>
        )}
      </div>
    </>
  );
}

export default App;
