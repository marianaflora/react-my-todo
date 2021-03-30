import React, { useContext } from 'react';

//import {IoTrashOutline} from 'rect-icons/io5';
import { TodoListContext } from '../contexts/TodoListContext';

import '../styles/TasksList.css';


const TasksList = () => {
    const { TasksListUpdate, handleRemoveTask } = useContext(TodoListContext);

    console.log(TasksListUpdate);
    
    return(
        <div className="container">
            <div className="tasks">
                <h2>My Tasks</h2>
                <ul className="list">
                    { TasksListUpdate.map((task, index) => (
                        <li key={index}>
                            <input 
                                type="checkbox"
                            />
                            <input
                                type="text"
                                value={task}
                                readOnly={true}
                            />
                            <button>
                                onClick={() => handleRemoveTask(index)}
                                {/* <IoTrashOutline /> */}
                            </button>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    )
}

export default TasksList;