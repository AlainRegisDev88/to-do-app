import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Project.css'
import { useNavigate } from 'react-router-dom';
import { faArrowLeft, faClipboardCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';


const Project = ({ projects, tasks }) => {
    const { projectId } = useParams();
    const navigate = useNavigate()


    const project = projects?.find((project) => project.project_id == projectId);
    const tasksInThisProject = tasks?.filter((task) => task.project_id == projectId) ?? [];
    const activeTasksInThisProject = tasksInThisProject?.filter(task => task.task_status != "Completed")

    console.log(tasksInThisProject)
    console.log(projectId)

    const formatDate = (dateString) =>{

        const myDate = new Date(dateString)

        const month = myDate.toLocaleString('en-US', { month: 'short' });;
        const day = myDate.getDate();

        const date = `${month} ${day}`;
        return date
    }

    const truncateString = (string, limit) =>{
        if(string.length <= limit){
            return string
        }else{
            return (string.slice(0, limit) + "...")
            
        }
    }

    const animationTiming = {
        duration: 300,
        easing: "ease-in-out",
        fill: "forwards"
    }

    const scaleUp = (e) => {
        const taskCard = e.currentTarget;
        taskCard.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.05)", boxShadow: "0 0 10px 2px rgba(0,0,0,0.1)" }
        ], animationTiming)

    }

    const scaleDown = (e) => {
        const taskCard = e.currentTarget;
        taskCard.animate([
            { transform: "scale(1.05)" },
            { transform: "scale(1)" }
        ], animationTiming)
    }

    return (
        <section className="main-project">
            <div className="project-title"><FontAwesomeIcon className="back-icon" onClick={() => navigate(-1)} icon={faArrowLeft} /><p>Project: {project?.project_name}</p></div>

            <div className="project-description"><i>{project?.description}</i></div>
            {activeTasksInThisProject.length === 0 && (
                <div className="no-tasks">
                    <FontAwesomeIcon className='clipboard-icon' icon={faClipboardCheck} />
                    <p>No pending tasks in this project</p>
                </div>
            )}
            <div className="tasks-list">
                {activeTasksInThisProject.map((task) => {
                    return (

                        <div id="task-card" key={task.task_id} onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="task-card-1">
                            <div className="task-label">
                                <div className={`task-tag-p ${task.task_status !== "Completed" ? `${task.priority?.charAt(0).toLowerCase()}${task.priority?.slice(1)}-priority-tag` : ""} ${task.task_status === 'Completed' ? "done-tag" : ""}`}>
                                    {task?.task_status === "Completed" ? "Done" : task.priority}
                                </div>
                            </div>
                            <div className="task-card-title">
                                <div className={`task-title ${task.task_status === 'Completed' ? "title-done" : ""}`}>{task.title}</div>
                            </div>

                            <div className="task-card-body">
                                <p className="descriprion">
                                    {task.description}
                                </p>
                            </div>

                            <div className="task-card-footer">
                                <div className="due-date">
                                    <FontAwesomeIcon icon={faClock} />
                                    <p>{formatDate(task.due_date)}</p>
                                </div>
                            </div>

                        </div>

                    )
                })}
            </div>


        </section>
    );
}

export default Project;