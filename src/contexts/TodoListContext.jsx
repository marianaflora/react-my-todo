import React, { createContext, useEffect, useState } from 'react';

export const TodoListContext = createContext({});

const TodoListProvider = (props) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [TasksListUpdate, setTasksListUpdate] = useState([]);

    useEffect(() => {
        const myTaskList = localStorage.getItem('tasks-list');
        console.log(myTaskList);
        if(myTaskList) {
            setTasksListUpdate(JSON.parse(myTaskList));
        }
    }, []);

    const handleCreateNewTask = () => {
        setTasksListUpdate([...TasksListUpdate, taskTitle]);
        localStorage.setItem('tasks-list', JSON.stringify([...TasksListUpdate, taskTitle]));
        
        setTaskTitle("");
    }

    const handleRemoveTask = (indexTask) => {
        console.log('Remove task', indexTask);

        const newTasksList = TasksListUpdate.filter((task, index) => {
            return index !== indexTask;
        });

        console.log(newTasksList);

        setTasksListUpdate(newTasksList);
        localStorage.setItem('tasks-list', JSON.stringify(newTasksList));
    }

    return(
        <TodoListContext.Provider value={ {
            taskTitle,
            setTaskTitle,
            handleCreateNewTask,
            TasksListUpdate,
            handleRemoveTask,
        } }>
            { props.children }
        </TodoListContext.Provider>
    )
}

export default TodoListProvider;