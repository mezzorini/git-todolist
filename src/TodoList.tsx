import React from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

type PropsType = {
    title: string;
    tasks: Array<TaskType>;
    removeTask: (taskId: number) => void
    changeFilter: (newFilterValue: FilterValuesType) => void
}

export function TodoList(props: PropsType) {
    return (<div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map( (t) => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                            <button onClick={ () => { props.removeTask(t.id) } }>X</button>
                        </li>
                    );
                }) }
            </ul>
            <div>
                <button onClick={ () => { props.changeFilter("all") } }>ALL</button>
                <button onClick={ () => { props.changeFilter("active") } }>ACTIVE</button>
                <button onClick={ () => { props.changeFilter("completed") } }>COMPLETED</button>
            </div>
        </div>
    );
}