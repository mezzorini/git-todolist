import React, {useState, ChangeEvent, KeyboardEvent} from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

type PropsType = {
    title: string;
    tasks: Array<TaskType>;
    removeTask: (taskId: string) => void
    changeFilter: (newFilterValue: FilterValuesType) => void
    addTask: (title: string) => void
}

export function TodoList(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle("");
    };
    const newTaskTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value);
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }
    const AllClickHandler = () => props.changeFilter("all")
    const ActiveClickHandler = () => props.changeFilter("active")
    const CompletedClickHandler = () => props.changeFilter("completed")

    return (<div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={newTaskTitleChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>+
                </button>
            </div>
            <ul>
                {props.tasks.map((t) => {

                    const removeTaskHandler = () => props.removeTask(t.id)

                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                            <button onClick={removeTaskHandler}>X</button>
                        </li>
                    );
                })}
            </ul>
            <div>
                <button onClick={AllClickHandler}>ALL</button>
                <button onClick={ActiveClickHandler}>ACTIVE</button>
                <button onClick={CompletedClickHandler}>COMPLETED</button>
            </div>
        </div>
    );
}