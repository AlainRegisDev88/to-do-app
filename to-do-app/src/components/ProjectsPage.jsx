import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectsPage = () => {
    return ( 
        <section className="projects-page">
            <div className="projects-container">
                <div className="projects-header projects-item">
                    <p>Projects</p>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <FontAwesomeIcon icon={faUser} />
                        <p className="open-tasks-count">
                            6 open tasks
                        </p>
                    </div>
                </div>
                <div className="project-card"></div>
                <div className="project-card"></div>
                <div className="project-card"></div>
                <div className="project-card"></div>
            </div>
        </section>
     );
}
 
export default ProjectsPage;