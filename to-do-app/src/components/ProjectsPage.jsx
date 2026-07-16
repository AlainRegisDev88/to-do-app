import { faAdd, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './ProjectsPage.css'

const ProjectsPage = () => {
    return (
        <section className="projects-page">
            <div className="projects-header">
                    <p>Projects</p>
                </div>
            <div className="projects-container">
                <div className="project-card">
                    <div className="project-header">
                        <FontAwesomeIcon icon={faUser} />
                        <p className="project-title">Personal</p>
                    </div>
                    <p className="open-tasks-count">
                        6 open tasks
                    </p>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <FontAwesomeIcon icon={faUser} />
                        <p className="project-title">Personal</p>
                    </div>
                    <p className="open-tasks-count">
                        6 open tasks
                    </p>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <FontAwesomeIcon icon={faUser} />
                        <p className="project-title">Personal</p>
                    </div>
                    <p className="open-tasks-count">
                        6 open tasks
                    </p>
                </div>

                <div className="project-card">
                    <div className="project-header">
                        <FontAwesomeIcon icon={faUser} />
                        <p className="project-title">Personal</p>
                    </div>
                    <p className="open-tasks-count">
                        6 open tasks
                    </p>
                </div>

                <div className="project-card add-new-task-card">
                    <FontAwesomeIcon icon={faAdd} />
                    <p>Add new project</p>
                </div>
            </div>
        </section>
    );
}
export default ProjectsPage;