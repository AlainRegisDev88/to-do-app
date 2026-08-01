import { faClipboardCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import './CompletedTasks.css'
import taskService from '../services/tasksService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CompletedTasks = ({ tasks }) => {

    const completedTasksList = tasks.filter(task => task.task_status === "Completed")

    const removeTask = async (taskId) =>{
        try{

            const response = taskService.removeTask(taskId)
            console.log(response)

        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <section className="completed-tasks">
            <div className="completed-tasks-header">
                Completed tasks
            </div>

            {completedTasksList.length === 0 && (
                <div className="no-tasks">
                    <FontAwesomeIcon className='clipboard-icon' icon={faClipboardCheck} />
                    <p>No tasks found...</p>
                </div>
            )}

            <div className="tasks-section completed-section">
                {completedTasksList.map((task) => {
                    return (
                        <div key={task.task_id} className="task-card active-task">
                            <div className="task-card-right">
                                <div className={`checkbox checked`}></div>
                                <div className={`task-title title-done`}>{task.title}</div>
                            </div>
                            <div className='task-right'>
                                <div className={`task-tag ${task.task_status !== "Completed" ? `completed-priority-tag` : ""} ${task.task_status === 'Completed' ? "done-tag" : ""}`}>
                                    Done
                                </div>
                                <div onClick={() => removeTask(task.task_id)} className="remove-task">
                                    <FontAwesomeIcon icon={faClose} />
                                </div>
                            </div>  

                        </div>
                    )
                })}
            </div>


        </section>
    );
}

export default CompletedTasks;