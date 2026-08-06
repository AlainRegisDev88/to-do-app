import { faAdd, faSpinner, faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './ProjectsPage.css'
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import projectsServices from "../services/projectsServices";



const ProjectsPage = ({projects, loading, onSelectProject}) => {
    // const [projects, setProjects] = useState([])
    // const [loading, setLoading] = useState(false)
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const getProjects = async () => {
    //         setLoading(true)
    //         const results = await projectsServices.fetchProjects()
    //         setLoading(false)
    //         setProjects(results.projects)
    //     }

    //     getProjects()
    //     console.log(projects)
    // }, [])

    const openProject = (e) =>{
        e.preventDefault()
        const currentId = e.currentTarget.dataset.id;
        onSelectProject(currentId)
        // navigate("/project", {state: {projectId: currentId}})
    }

    return (
        <section className="projects-page">
            {loading &&
                (<span className="spinner-container">
                    <FontAwesomeIcon className='loading-spinner' icon={faSpinner} />
                </span>)}
            <div className="projects-header">
                <p>Projects</p>
            </div>
            <div className="projects-container">
                

                {projects.map((project) => {
                    
                    
                    return (
                    
                        <div data-id={project.project_id} onClick={openProject} key={project.project_id} className="project-card">
                            <div className="project-header">
                                <FontAwesomeIcon icon={faTasks} />
                                <p className="project-title">{project.project_name}</p> 
                                {/* {doesnt load the icons :( } */}
                            </div>
                            <p className="open-tasks-count">
                                6 open tasks
                            </p>
                        </div>

                    )
                })}

                <Link to="/new-project" className="project-card add-new-task-card">
                    <FontAwesomeIcon icon={faAdd} />
                    <p>Add new project</p>
                </Link>
            </div>
        </section>
    );
}
export default ProjectsPage;