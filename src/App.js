import React, { useState } from "react";
import {
  FileAddOutlined,
  EditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import image from "./res/todo.jpg";
import "./App.css";
import Modal from "./component/pop";
import Edit from "./component/edit";

function App() {
  const [display, setDisplay] = useState("false");
  const [modify, setModify] = useState("false");
  const [input, setInput] = useState("");
  const [change, setChange] = useState(null);
  const [todo, setTodo] = useState([]);

  const [c, setC] = useState(0);

  const tab = [
    "rgba(255, 105, 180, 0.1)",
    "rgba(30, 144, 255, 0.1)",
    "rgba(102, 205, 170, 0.1)",
    "rgba(255, 160, 122, 0.1)",
    "rgba(123, 104, 238, 0.1)",
    "rgba(119, 136, 153, 0.1)",
  ];

  const arr = [
    "rgba(255, 105, 180)",
    "rgba(30, 144, 255)",
    "rgba(102, 205, 170)",
    "rgba(255, 160, 122)",
    "rgba(123, 104, 238)",
    "rgba(119, 136, 153)",
  ];

  const addtask = () => {
    if (input) {
      setTodo([
        ...todo,
        {
          task: input,
          id: uuidv4(),
          colorback: tab[c],
          colr: arr[c],
          info: new Date(),
        },
      ]);
      if (c === 5) {
        setC(0);
      } else {
        setC(c + 1);
      }
    }
  };

  return (
    <div className="App">
      <header
        style={{
          display: "grid",
          backgroundColor: "#f2f2f2",
          gridTemplateColumns: "auto auto auto auto auto auto",
        }}
      >
        <h1 style={{ gridColumn: "3 / 5", color: "purple" }}>To-Do List</h1>
        {todo.length ? (
          <FileAddOutlined
            style={{
              color: "orange",
              fontSize: 25,
              gridColumn: "5",
              textAlign: "end",
              paddingTop: 8,
            }}
            title="Add New Task"
            onClick={() => setDisplay("true")}
          />
        ) : (
          <span></span>
        )}
      </header>
      <main style={{ padding: 15 }}>
        {todo.length ? (
          <>
            {display == "true" && (
              <Modal setdis={setDisplay} setin={setInput}>
                <input
                  type="text"
                  style={{
                    border: "1px solid rgb(128,0,128)",
                    width: "100%",
                    height: "85%",
                    overflow: "auto",
                    textAlign: "justify",
                    borderRadius: 10,
                  }}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div style={{ marginTop: 20 }}>
                  <button
                    style={{
                      border: "1px solid red",
                      color: "red",
                      backgroundColor: "white",
                      width: 60,
                      height: 25,
                      marginRight: 10,
                      borderRadius: 5,
                    }}
                    onClick={() => {
                      setInput("");
                      setDisplay("false");
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    style={{
                      border: "1px solid blue",
                      color: "blue",
                      backgroundColor: "white",
                      width: 60,
                      height: 25,
                      marginLeft: 10,
                      borderRadius: 5,
                    }}
                    onClick={() => {
                      addtask();
                      setInput("");
                      setDisplay("false");
                    }}
                  >
                    Save
                  </button>
                </div>
              </Modal>
            )}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
              }}
            >
              {todo.map((el, i) => (
                <div
                  style={{
                    margin: 15,
                    height: 100,
                    border: "1px solid",
                    borderColor: el.colr,
                    borderRadius: 15,
                    display: "grid",
                    gridTemplateRows: "22px auto 10px",
                    backgroundColor: el.colorback,
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      textAlign: "right",
                    }}
                  >
                    <EditOutlined
                      style={{
                        paddingRight: 10,
                        color: "#F4A460",
                      }}
                      title="Edit Task"
                      onClick={() => {
                        setModify("true");
                        setChange(el);
                      }}
                    />
                    {modify == "true" && (
                      <Edit
                        setModify={setModify}
                        setChange={setChange}
                        todo={todo}
                        setTodo={setTodo}
                        change={change}
                      />
                    )}
                    <i
                      class="fa fa-trash"
                      aria-hidden="true"
                      style={{
                        paddingRight: 10,
                        color: "#DC143C",
                      }}
                      title="Delete Task"
                      onClick={() =>
                        setTodo(todo.filter((e) => e.id !== el.id))
                      }
                    ></i>
                    <InfoCircleOutlined
                      style={{
                        paddingRight: 10,
                        color: "#778899",
                      }}
                      title={el.info}
                    />
                  </div>
                  <div
                    style={{
                      textAlign: "justify",
                      padding: "0px 10px",
                      overflow: "auto",
                    }}
                  >
                    {el.task}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <img src={image} />
            <h2>Add your first task</h2>
            <button
              style={{
                border: "1px solid #4169E1",
                backgroundColor: "#4169E1",
                color: "white",
                borderRadius: 8,
                width: 90,
                height: 30,
                cursor: "pointer",
              }}
              onClick={() => setDisplay("true")}
            >
              Add Task
            </button>
            {display == "true" && (
              <Modal setdis={setDisplay} setin={setInput}>
                <input
                  type="text"
                  style={{
                    border: "1px solid rgb(128,0,128)",
                    width: "100%",
                    height: "85%",
                    overflow: "auto",
                    textAlign: "justify",
                    borderRadius: 10,
                  }}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div style={{ marginTop: 20 }}>
                  <button
                    style={{
                      border: "1px solid red",
                      color: "red",
                      backgroundColor: "white",
                      width: 60,
                      height: 25,
                      marginRight: 10,
                      borderRadius: 5,
                    }}
                    onClick={() => {
                      setInput("");
                      setDisplay("false");
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    style={{
                      border: "1px solid blue",
                      color: "blue",
                      backgroundColor: "white",
                      width: 60,
                      height: 25,
                      marginLeft: 10,
                      borderRadius: 5,
                    }}
                    onClick={() => {
                      addtask();
                      setInput("");
                      setDisplay("false");
                    }}
                  >
                    Save
                  </button>
                </div>
              </Modal>
            )}
          </>
        )}
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
