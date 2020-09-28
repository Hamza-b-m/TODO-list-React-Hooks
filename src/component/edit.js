import React from "react";

function Edit({ setModify, setChange, todo, setTodo, change }) {
  const edittask = () => {
    var newTodos = todo.map((el) => (el.id === change.id ? change : el));
    setTodo(newTodos);
  };
  console.log(change);
  return (
    <div className={"modal-wrapper"}>
      <div
        className={"modal-backdrop"}
        onClick={() => {
          setModify("false");
        }}
      />
      <div className={"modal-box"}>
        <input
          type="text"
          style={{
            border: "1px solid",
            borderColor: change.colr,
            backgroundColor: change.colorback,
            width: "100%",
            height: "85%",
            overflow: "auto",
            textAlign: "justify",
            borderRadius: 10,
          }}
          value={change.task}
          onChange={(e) => setChange({ ...change, task: e.target.value })}
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
              setChange("");
              setModify("false");
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
              edittask();
              setChange(null);
              setModify("false");
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
