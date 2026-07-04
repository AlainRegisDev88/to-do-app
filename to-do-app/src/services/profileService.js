import api from "./api";

const profileService = {

    getPersonalData: async () => {
        try {
            const response = await api.get(`/profile`)
            return response.data
        } catch (error) {
            throw error.response?.data?.message || "Failed to get the info"
        }
    },

}

export default profileService;