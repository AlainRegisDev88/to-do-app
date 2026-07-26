import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SettingsPage.css'

const SettingsPage = () => {
    return ( 
        <section className="settings-page">
            <div className="settings-header page-header">
                <p>Settings</p>
            </div>

            <div className="settings-cards">
                <div className="settings-card profile-card">
                    <div className="profile-info">
                        <div className="avatar">RU</div>
                        <div className="personal-info">
                            <p className="name settings-card-heading">Regis Udahemuka</p>
                            <p className="email">regis@gmail.com</p>
                        </div>
                    </div>
                    <div className="edit-profile">
                        <button className="edit-profile button-secondary">Edit Profile</button>
                    </div>
                </div>

                <div className="settings-card preferences-card">
                    <div className="preferences-heading settings-card-heading">
                        <p>Preferences</p>
                    </div>
                    <div className="preference">
                        <p className="settings-row">Dark mode</p>
                        <input type="checkbox" name="dark-mode"/>
                    </div>

                    <div className="preference">
                        <p className="settings-row">Email reminders</p>
                        <input type="checkbox" name="email-messages"/>
                    </div>
                </div>

                <div className="settings-card account-settings">
                    <div className="settings-card-heading">
                        <p>Account</p>
                    </div>
                    <div className="setting change-password">
                        <p className="settings-row">Change password</p>
                        <FontAwesomeIcon className="chevron-icon" icon={faChevronRight} />
                    </div>
                    <div className="setting delete-account">
                        <p className="settings-row delete-row">Delete Account</p>
                        <FontAwesomeIcon className="chevron-icon" icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SettingsPage;