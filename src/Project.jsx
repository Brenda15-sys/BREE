import React, { useState } from "react";
import "./Project.css";


            


function Project() {
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
  );
  
}

export default Project;

 
        