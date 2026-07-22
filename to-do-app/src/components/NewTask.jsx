import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NewTask.css'
import { faClose, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import taskService from '../services/tasksService';

const NewTask = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate();

    // new task elements

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');
    const [project, setProject] = useState('');

    const addNewTask = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError('')
        try {
            const newTask = {
                title,
                description,
                dueDate,
                priority,
                project
            }
            const response = await taskService.saveTask(newTask);
            console.log(response.task)
            navigate('/')

        }
        catch (error) {
            setError("Unable to create a task: ", error)
        }
        finally {
            setLoading(false)
        }


    }
    return (
        <section className="new-task-page">
            {loading && (
                <span class="spinner-container">
                    <FontAwesomeIcon className='loading-spinner' icon={faSpinner} />
                </span>)}
            <div className="new-task-card">
                <div onClick={() => navigate(-1)} className="close-icon"><FontAwesomeIcon icon={faClose} /></div>

                <form className="add-task-form" onSubmit={addNewTask} method="post">
                    <div className="form-header">
                        <p>New task</p>
                    </div>
                    <div className="add-task-form-item">
                        <label className="form-label" htmlFor="title">Title</label>
                        <input
                            className='tasks-input-box'
                            type="text" name="title"
                            placeholder='What needs to get done?'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="add-task-form-item">
                        <label className="form-label" htmlFor="description">Description</label>
                        <textarea
                            className="desc-input-box"
                            name="description"
                            placeholder='Add more details(optional)'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="date-priority-row">
                        <div className="due-date-field">
                            <label className="form-label" htmlFor="task-date">Due date</label>
                            <input
                                className='date-input'
                                type="date"
                                name="task-date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                            />
                        </div>
                        <div className="priority-field">
                            <label className="form-label" htmlFor="task-priority">Priority</label>
                            <select
                                name="task-priority"
                                className='task-priority'
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="add-task-form-item">
                        <label className="form-label" htmlFor="project-selection"> Project</label>
                        <select
                            name="project-selection"
                            className='tasks-input-box'
                            value={project}
                            onChange={(e) => setProject(e.target.value)}
                        >
                            <option value="None">None</option>
                            <option value="Project 1">Project 1</option>
                        </select>
                    </div>

                    <div className="add-task-form-item action-section">
                        <button type="button" onClick={() => navigate(-1)} className="cancel-button">Cancel</button>
                        <button type="submit" onClick={() => addNewTask} className="create-task-button">Create task</button>
                    </div>
                    <center><span>{error && error}</span></center>
                </form>
            </div>
        </section>
    );
}

export default NewTask;