import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks1, setTasks] = useState([
        { id: 1, title:"HTML&CSS", isDone: true},
        { id: 2, title:"JS", isDone: true},
        { id: 3, title:"ReactJs", isDone: true},
        { id: 4, title:"Rest API", isDone: false},
        { id: 5, title:"GraphQL", isDone: false}
    ]);

    let [filter, setFilter] = useState <FilterValuesType>("all");

    function removeTask(taskId: number) {
        let filteredTasks = tasks1.filter( (t:TaskType) => t.id !== taskId)
        setTasks(filteredTasks);
    }

    function changeFilter(newFilterValue: FilterValuesType) {
        setFilter(newFilterValue)
    }

    let tasksForTodoList = tasks1;
    if (filter === "active") {
        tasksForTodoList = tasks1.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodoList = tasks1.filter(t => t.isDone === true)
    }

    return (
        <div className="App">
            <TodoList
                title="What to learn"
                tasks={tasksForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
