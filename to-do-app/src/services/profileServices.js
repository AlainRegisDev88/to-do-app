import axios from "axios";
import api from "./api";

const profileServices = {

    getPersonalData: async () => {
        try {
            const response = await api.get(`/profile`)
            return response.user
        } catch (error) {
            throw error.response?.data?.message || "Failed to get the info"
        }
    },

}