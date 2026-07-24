import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NewProject.css'
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const NewProject = () => {
    const[projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState('')

    const handleProjectSubmission = (e) => {
        e.preventDefeult()

        


    }
console.log(projectName)
    return (
        <div className="new-project-page">
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
                            onChange={(e)=> setProjectName(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="project-desc">Project description</label>
                        <textarea
                            type="text"
                            name="project-desc"
                            className='desc-input-box'
                            value={projectDescription}
                            onChange={(e)=> setProjectDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-item submit">
                        <button onClick={()=>handleProjectSubmission} type="submit" className='button-primary'>+ Add project</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default NewProject;