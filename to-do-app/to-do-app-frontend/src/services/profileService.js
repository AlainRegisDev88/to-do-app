import api from "./api";

const profileService = {

    getPersonalData: async () => {
        try {
            const response = await api.get(`/profile`)
            return response.data.user
        } catch (error) {
            throw error.response?.data?.message || "Failed to get the info"
        }
    },

    updateUsername: async (userName) => {
        try {
            const result = await api.post('/update/username', {newUsername: userName})
            return result
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    updateEmail: async (email) => {
        try {
            const result = await api.post('/update/email', {newEmail: email})
            return result
        } catch (error) {
            console.log(error)
            throw error
        }
    }

}

export default profileService;