import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NewTask.css'
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const NewTask = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    
    // new task elements

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');
    const [project, setProject] = useState('');

    const addNewTask = (e) => {
        e.preventDefault();
        setIsLoading(true)
        setError('')

        const newTask = {
            title,
            description,
            dueDate,
            priority,
            project
        }



    }
    return (
        <section className="new-task-page">
            <div className="new-task-card">
                <div className="close-icon"><FontAwesomeIcon icon={faClose} /></div>

                <form className="add-task-form" onSubmit={addNewTask} method="post">
                    <div className="form-header">
                        <p>New task</p>
                    </div>
                    <div className="add-task-form-item">
                        <label className="form-label" htmlFor="title">Title</label>
                        <input className='tasks-input-box' type="text" name="title" placeholder='What needs to get done?' />
                    </div>

                    <div className="add-task-form-item">
                        <label className="form-label" htmlFor="description">Description</label>
                        <textarea className="desc-input-box" name="description" placeholder='Add more details(optional)'></textarea>
                    </div>

                    <div className="date-priority-row">
                        <div className="due-date-field">
                            <label className="form-label" htmlFor="task-date">Due date</label>
                            <input className='date-input' type="date" name="task-date" />
                        </div>
                        <div className="priority-field">
                            <label className="form-label" htmlFor="task-priority">Priority</label>
                            <select name="task-priority" className='task-priority'>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="add-task-form-item">
                        <label className="form-label" htmlFor="project-selection"> Project</label>
                        <select name="project-selection" className='tasks-input-box'>
                            <option value="None">None</option>
                            <option value="Project 1">Project 1</option>
                        </select>
                    </div>

                    <div className="add-task-form-item action-section">
                        <div className="cancel-button">Cancel</div>
                        <div className="create-task-button">Create task</div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default NewTask;