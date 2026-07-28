import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import './CompletedTasks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CompletedTasks = ({ tasks }) => {

    const completedTasksList = tasks.filter(task => task.task_status === "Completed")

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
                            <div className={`task-tag ${task.task_status !== "Completed" ? `completed-priority-tag` : ""} ${task.task_status === 'Completed' ? "done-tag" : ""}`}>
                                Done
                            </div>

                        </div>
                    )
                })}
            </div>


        </section>
    );
}

export default CompletedTasks;