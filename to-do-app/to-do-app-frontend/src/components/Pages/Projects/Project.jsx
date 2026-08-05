import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Project.css'
import { useNavigate } from 'react-router-dom';
import { faArrowLeft, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';


const Project = ({ projects, tasks }) => {
    const { projectId } = useParams();
    const navigate = useNavigate()


    const project = projects?.find((project) => project.project_id == projectId);
    const tasksInThisProject = tasks?.filter((task) => task.project_id == projectId) ?? [];

    console.log(tasksInThisProject)
    console.log(projectId)

    const animationTiming = {
        duration: 300,
        easing: "ease-in-out",
        fill: "forwards"
    }

    const scaleUp = (e) => {
        const taskCard = e.currentTarget;
        taskCard.animate([
            { transform: "scale(1)"},
            { transform: "scale(1.05)", boxShadow: "0 0 10px 2px rgba(0,0,0,0.1)"}
        ], animationTiming) 

    }

    const scaleDown = (e) => {
        const taskCard = e.currentTarget;
        taskCard.animate([
            { transform: "scale(1.05)"},
            { transform: "scale(1)"}
        ], animationTiming) 
    }

    return (
        <section className="main-project">
            <div className="project-title"><FontAwesomeIcon className="back-icon" onClick={() => navigate(-1)} icon={faArrowLeft} /><p>Project: {project?.project_name}</p></div>

            <div className="project-description"><i>{project?.description}</i></div>
            {tasksInThisProject.length === 0 && (
                <div className="no-tasks">
                    <FontAwesomeIcon className='clipboard-icon' icon={faClipboardCheck} />
                    <p>No pending tasks in this project</p>
                </div>
            )}
            <div className="tasks-list">
                {tasksInThisProject.map((task) => {
                    return (

                        <div id="task-card" key={task.task_id} onMouseEnter={scaleUp} onMouseLeave={scaleDown} className="task-card-1">{task.title}</div>

                    )
                })}
            </div>


        </section>
    );
}

export default Project;