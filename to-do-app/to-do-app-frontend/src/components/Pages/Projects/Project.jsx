import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Project.css'

import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Project = ({ projects, tasks }) => {
    // const location = useLocation()
    // const { projectId } = location.state || {}

    // const navigate = useNavigate()
    const [project, setProject] = useState([])
    const { projectId } = useParams();
    const [tasksInThisProject, setTasksInThisProject] = useState([])

    useState(() => {
        setProject(projects.find((project) => {
            return projectId == project.project_id
        }))

        setTasksInThisProject(tasks.filter(task => task.project_id = projectId))
        console.log(project)
    })


    console.log(tasksInThisProject)  
    console.log(projectId)

    return (
        <section className="main-project">
            <div className="project-title">Project: {project?.project_name}</div>

            <div className="project-description"><i>{project?.description}</i></div>
            {tasksInThisProject.length === 0 && (
                <div className="no-tasks">
                    <FontAwesomeIcon className='clipboard-icon' icon={faClipboardCheck} />
                    <p>No pending tasks in this project</p>
                </div>
            )}

            {tasksInThisProject.map((task) => {
                <div key={task.title} className="tasks-list">
                    <div className="task-card">task 1</div>
                </div>
            })}



        </section>
    );
}

export default Project;