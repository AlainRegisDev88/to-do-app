import './Project.css'
import { useLocation } from 'react-router-dom';


const Project = ({projects, tasks}) => {
    const location =  useLocation()
    const {projectId} = location.state || {}

    const project = projects.find((project) =>{
       return projectId == project.project_id
    })

    const tasksInThisProject = tasks.filter(task => task.project_id = projectId)

    console.log(tasksInThisProject)
    console.log(projectId)

    return ( 
        <section className="main-project">
            <div className="project-title">Project: {project?.project_name}</div>

            <div className="project-description"><i>{project?.description}</i></div>

            <div className="tasks-list">
                <div className="task-card">task 1</div>
                <div className="task-card">task 1</div>
                <div className="task-card">task 1</div>
                <div className="task-card">task 1</div>
            </div>
        </section>
     );
}
 
export default Project;