/*import React, { useState } from "react";
import "./Project.css"; // Import your CSS file

function ToDoApp() {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState("");

  const addItem = () => {
    if (newItemText.trim() !== "") {
      setItems([...items, { text: newItemText, isCompleted: false }]);
      setNewItemText("");
    }
  };

  const toggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isCompleted = !updatedItems[index].isCompleted;
    setItems(updatedItems);
  };

  const clearList = () => {
    setItems([]);
  };

  return (
  <div className="project-wrapper">
    <div className="card">
      <div className="card-header">To-Do List</div>
      <div className="card-body">
  <div className="app-container background-image">
    <h1> My To-dos List</h1>

    <div class="flex-container">


    <h3><i>
      &#x1F50D; To-Do List
      </i>
    </h3>
    <div>
      <input
        type="text"
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="&#x1F50D; search to-dos...."
      />
      <button onClick={addItem}>Add Item</button>
      <button onClick={clearList}>Clear List</button>
    </div>
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => toggleItem(index)}
          style={{
            textDecoration: item.isCompleted ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {item.text}
        </li>
      ))}
    </ul>
  </div>  
   </div>
      </div>
    </div>
  </div>
   

  );
}

export default ToDoApp;*/


import React, { useState } from "react";
import "./Project.css"; // Import your CSS file

function ToDoApp() {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState("");
  const [isListVisible, setListVisibility] = useState(false);

  const addItem = () => {
    if (newItemText.trim() !== "") {
      setItems([...items, { text: newItemText, isCompleted: false }]);
      setNewItemText("");
    }
  };

  const toggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isCompleted = !updatedItems[index].isCompleted;
    setItems(updatedItems);
  };

  const clearList = () => {
    setItems([]);
  };

  const toggleListVisibility = () => {
    setListVisibility(!isListVisible);
  };

  return (
    <div className="project-wrapper">
      <div className={`card ${isListVisible ? "expanded" : ""}`}>
        <a href="#toggle-list" className="card-header" onClick={toggleListVisibility}>
          To-Do List
        </a>
        {isListVisible && (
          <div className="card-body">
            <div className="app-container background-image">
              <h1> My To-dos List</h1>
              <div class="flex-container">
                <h3>
                  <i>&#x1F50D; To-Do List</i>
                </h3>
                <div>
                  <input
                    type="text"
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    placeholder="&#x1F50D; search to-dos...."
                  />
                  <button onClick={addItem}>Add Item</button>
                  <button onClick={clearList}>Clear List</button>
                </div>
                <ul>
                  {items.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => toggleItem(index)}
                      style={{
                        textDecoration: item.isCompleted ? "line-through" : "none",
                        cursor: "pointer",
                      }}
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToDoApp;



















 
        