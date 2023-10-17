import React, { useState } from "react";

const AddToDo = () => {
    const [toDoList, setToDoList] = useState([]);
    const [toDo, setToDo] = useState("");

    function updateToDo(event) {
        setToDo(event.target.value);
    }

    function updateToDoList(event)
    {
        event.preventDefault();
        setToDoList([...toDoList, toDo]);
        setToDo("");
    }

    function handleDelete(event)
    {
        const id = event.target.id;
        let updatedToDoList = toDoList.filter((item,index) => {
            if(index != id)
            {
                return true;
            }
        });
        setToDoList(updatedToDoList);
    }

    return (
        <div>
            <h1>To-Do List</h1>

            <form onSubmit={updateToDoList}>
                <input type="text" onChange={updateToDo} value={toDo} required />
                <button type="submit">Add Todo</button>
            </form>

            {
                toDoList.map((item, index) => {
                    return (
                       <ul>
                        <li> 
                            <span>{item}</span>
                            <button id={index} onClick={handleDelete}>Delete</button>
                        </li>
                       </ul>
                    )
                })
            }
        </div>
    )
}

export default AddToDo;