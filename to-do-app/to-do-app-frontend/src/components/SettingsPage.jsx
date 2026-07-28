import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SettingsPage.css'
import { useState } from "react";

const SettingsPage = ({ user }) => {
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")

    const openEditProfileCard = (e) => {
        e.preventDefault()

        const editProfileCard = document.getElementById("edit-profile");

    }

    const updateProfile = () => {
        
    }

    return (
        <section className="settings-page">

            <div id="edit-profile">
                <form onSubmit={updateProfile}>

                    <div className="form-item">
                        <label htmlFor="name">Change your username: </label>
                        <input
                            className="input-box"
                            type="text"
                            name="new-username"
                            value={newUsername}
                            onChange={(e)=> setNewUsername(e.target.value)}
                        />
                    </div>

                    <div className="form-item">
                        <label htmlFor="email">Change your email: </label>
                        <input
                            className="input-box"
                            type="email"
                            name="new-email"
                            value={newEmail}
                            onChange={(e)=> setNewEmail(e.target.value)}
                        />
                    </div>

                </form>
            </div>

            <div className="settings-header page-header">
                <p>Settings</p>
            </div>

            <div className="settings-cards">
                <div className="settings-card profile-card">
                    <div className="profile-info">
                        <div className="avatar">{user?.name?.charAt(0).toUpperCase()}</div>
                        <div className="personal-info">
                            <p className="name settings-card-heading">{user.name}</p>
                            <p className="email">{user.email}</p>
                        </div>
                    </div>
                    <div className="edit-profile">
                        <button onClick={openEditProfileCard} className="edit-profile button-secondary">Edit Profile</button>
                    </div>
                </div>

                <div className="settings-card preferences-card">
                    <div className="preferences-heading settings-card-heading">
                        <p>Preferences</p>
                    </div>
                    <div className="preference">
                        <p className="settings-row">Dark mode</p>
                        <input type="checkbox" name="dark-mode" />
                    </div>

                    <div className="preference">
                        <p className="settings-row">Email reminders</p>
                        <input type="checkbox" name="email-messages" />
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