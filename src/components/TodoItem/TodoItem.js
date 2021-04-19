import React, { useState } from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id, deleteItem } = props;
  const [did, setDid] = useState(false);
  const changeMaked = () => {
    setDid(!did);
  };

  return (
    <div className="list">
      <div className="list-second" onClick={changeMaked}>
        <p className={did ? "maked-list-group-item" : null}> {content}</p>
      </div>

      <button onClick={() => deleteItem(id)} className="btn btn-danger">
        sil
      </button>
    </div>
  );
}

export default Todo;
