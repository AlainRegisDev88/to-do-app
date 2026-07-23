import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NewProject.css'
import { faClose } from '@fortawesome/free-solid-svg-icons';

const NewProject = () => {
    return ( 
        <div className="new-project-page">
            <div className="new-project-card">
                <FontAwesomeIcon className="close-icon" icon={faClose} />
            </div>
        </div>
     );
}
 
export default NewProject;