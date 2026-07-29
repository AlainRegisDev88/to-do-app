import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SettingsPage.css'
import { useState } from "react";
import profileService from "../services/profileService";

const SettingsPage = ({ user, setUser }) => {
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")

    const currentUserName = user.name;
    const currentEmail = user.email;

    const animTiming = {
        duration: 300, // milliseconds
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // smooth spring effect
        fill: 'forwards' // retains the final style frame
    };

    const openEditProfileCard = (e) => {
        e.preventDefault()
        const editUpdateLayout = document.getElementById("edit-profile-card");
        const editUpdateForm = document.querySelector(".edit-profile-form")
        editUpdateLayout.style.display = "flex";
        editUpdateLayout.style.pointerEvents = "auto";

        editUpdateLayout.animate([
            { opacity: 0, backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0,0,0,0)' },
            { opacity: 1, backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.4)' }
        ], animTiming);

        // Animate the form scaling and fading in
        editUpdateForm.animate([
            { opacity: 0, transform: 'scale(0.9)' },
            { opacity: 1, transform: 'scale(1)' }
        ], animTiming);
    }

    const closeEditProfileCard = () => {
        const editUpdateLayout = document.getElementById("edit-profile-card");
        const editUpdateForm = document.querySelector(".edit-profile-form")

        const layoutAnimate = editUpdateLayout.animate([
            { opacity: 1, backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.4)' },
            { opacity: 0, backdropFilter: 'blur(0)', backgroundColor: 'rgba(0, 0, 0, 0)' }
        ], animTiming)

        editUpdateForm.animate([
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0.9' }
        ])

        layoutAnimate.onfinish = () => {
            editUpdateLayout.style.display = "none";
            editUpdateLayout.style.pointerEvents = "none";
        }
    }

    const updateProfile = async (e) => {
        e.preventDefault();

        if(newUsername === "" && newEmail ===""){
            return "Invalid input"
        }

        if(newUsername === currentUserName){
            return "Your username can't be the same as the current one!"
        }

        if(newEmail === currentEmail){
            return "Your email can't be the same as the current one!"
        }

        if(newUsername || newEmail){
            if(newUsername && !newEmail){
                try{
                    const result = await profileService.updateUsername(newUsername)
                    console.log(result)
                    setUser({
                        ...user,
                        name: newUsername
                    })
                    setNewUsername("")
                    closeEditProfileCard()
                    
                }catch(error){
                    console.log(error)
                    throw error
                }
            }else if(newEmail && !newUsername){ 
                try{
                    const result = await profileService.updateEmail(newEmail)
                    console.log(result)
                    setUser({
                        ...user,
                        email: newEmail
                    })
                    setNewEmail("")
                    closeEditProfileCard()
                    
                }catch(error){
                    console.log(error)
                    throw error
                }

            }else if(newEmail && newUsername){
                
                try{
                    const result1 = await profileService.updateUsername(newUsername)
                    const result2 = await profileService.updateEmail(newEmail)
                    
                    console.log(result1 + result2)
                    setUser({
                        ...user,
                        name: newUsername,
                        email: newEmail
                    })
                    setNewUsername("")
                    setNewEmail("")
                    closeEditProfileCard()
                    
                }catch(error){
                    console.log(error)
                    throw error
                }
            }
        }


    }



    return (
        <>
            <section className="settings-page">

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

            <div id="edit-profile-card">
                <form className="edit-profile-form" id="edit-profile-form" onSubmit={updateProfile}>
                    <div onClick={closeEditProfileCard} className="close-button" id="close-button"><FontAwesomeIcon icon={faClose} /></div>
                    <div className="form-item">
                        <div className="form-title">
                            <center>
                                <p>Update your username</p>
                            </center>
                        </div>
                        <label htmlFor="name">Enter new username </label>
                        <input
                            className="input-box"
                            type="text"
                            placeholder="Enter new username"
                            name="new-username"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                        />
                    </div>

                    <div className="form-item separator-line">
                        <hr></hr>
                    </div>

                    <div className="form-item">
                        <div className="form-title">
                            <center><p>Update your email</p></center>
                        </div>
                        <label htmlFor="email">Enter new email </label>
                        <input
                            className="input-box"
                            type="email"
                            placeholder="Enter new email"
                            name="new-email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-item settings-action-section">
                        <button onClick={updateProfile} className="submit-button button-primary">Update profile</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SettingsPage;