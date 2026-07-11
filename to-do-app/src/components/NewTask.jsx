import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NewTask.css'
import { faClose, faCross, faX } from '@fortawesome/free-solid-svg-icons';

const NewTask = () => {
    return ( 
        <section className="new-task-page">
            <div className="new-task-card">
                <div className="close-icon"><FontAwesomeIcon icon={faClose} /></div>

            </div>
        </section>
     );
}
 
export default NewTask;