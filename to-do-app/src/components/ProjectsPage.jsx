import { faAdd, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './ProjectsPage.css'
import { useEffect, useState } from "react";
import projectsServices from "../services/projectsServices";



const ProjectsPage = () => {

    console.log("ProjectsPage rendered");
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProjects = async () => {
            setLoading(true)
            const results = await projectsServices.fetchProjects()
            setLoading(false)
            setProjects(results.projects)
        }

        getProjects()
        console.log(projects)
    }, [])

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
                        <div key={project.project_id} className="project-card">
                            <div className="project-header">
                                <FontAwesomeIcon icon={faUser} style={{ color: "darkgreen" }} />
                                <p className="project-title">{project.project_name}</p>
                            </div>
                            <p className="open-tasks-count">
                                6 open tasks
                            </p>
                        </div>

                    )
                })}

                <Link to="/" className="project-card add-new-task-card">
                    <FontAwesomeIcon icon={faAdd} />
                    <p>Add new project</p>
                </Link>
            </div>
        </section>
    );
}
export default ProjectsPage;