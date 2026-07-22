import { faAdd, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './ProjectsPage.css'
import { useState } from "react";


const ProjectsPage = () => {

    const [projects, setProjeacts] = useState([]);

    const getProjects = async () =>{
        const results =  await api.get('/projects')
    }
    

    
    return (
        <section className="projects-page">
            <div className="projects-header">
                    <p>Projects</p>
                </div>
            <div className="projects-container">
                <div className="project-card">
                    <div className="project-header">
                        <FontAwesomeIcon icon={faUser} style={{color:"darkgreen"}}/>
                        <p className="project-title">Personal</p>
                    </div>
                    <p className="open-tasks-count">
                        6 open tasks
                    </p>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <FontAwesomeIcon icon={faUser} />
                        <p className="project-title">School Activity</p>
                    </div>
                    <p className="open-tasks-count">
                        6 open tasks
                    </p>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <FontAwesomeIcon icon={faUser} />
                        <p className="project-title">Coding</p>
                    </div>
                    <p className="open-tasks-count">
                        6 open tasks
                    </p>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <FontAwesomeIcon icon={faUser} />
                        <p className="project-title">Gym</p>
                    </div>
                    <p className="open-tasks-count">
                        6 open tasks
                    </p>
                </div>

                <Link to="/new-project" className="project-card add-new-task-card">
                    <FontAwesomeIcon icon={faAdd} />
                    <p>Add new project</p>
                </Link>
            </div>
        </section>
    );
}
export default ProjectsPage;