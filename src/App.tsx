import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks1, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJs", isDone: true},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false}
    ]);

    let [filter, setFilter] = useState<FilterValuesType>("all");

    function removeTask(taskId: string) {
        let filteredTasks = tasks1.filter((t: TaskType) => t.id !== taskId)
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks1];
        setTasks(newTasks);

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
                addTask={addTask}
            />
        </div>
    );
}

export default App;
