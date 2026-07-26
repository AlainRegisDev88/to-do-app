import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NewProject.css'
import { faClose, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import projectsServices from '../../../services/projectsServices';
import { useNavigate } from 'react-router-dom';

const NewProject = () => {
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleProjectSubmission = async (e) => {
        e.preventDefault()
        const newProject = {
            projectName: projectName, 
            projectDescription: projectDescription
        }

        try {
            setLoading(true)
            const response = await projectsServices.addProject(newProject);
            
            navigate(-1, {state: {response: response}})

        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    console.log(projectName)
    return (
        <div className="new-project-page">
            {loading &&
                (<span className="spinner-container">
                    <FontAwesomeIcon className='loading-spinner' icon={faSpinner} />
                </span>)}
            <div className="new-project-card">
                <FontAwesomeIcon className="close-icon" icon={faClose} />

                <div className="form-header">
                    <p>Add a project</p>
                </div>
                <form className='add-project-form' onSubmit={handleProjectSubmission}>
                    <div className="form-item">
                        <label htmlFor="project-name">Project name</label>
                        <input
                            type="text"
                            className='input-box'
                            name="project-name"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="project-desc">Project description</label>
                        <textarea
                            type="text"
                            name="project-desc"
                            className='desc-input-box'
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-item submit">
                        <button onClick={() => handleProjectSubmission} type="submit" className='button-primary'>+ Add project</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default NewProject;