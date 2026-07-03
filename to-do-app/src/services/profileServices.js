import axios from "axios";
import api from "./api";

const API_URL = '/api'

const profileServices = {

    getPersonalData: async () => {
        try {
            const response = await api.get(`${API_URL}/profile`)
            return response.user
        } catch (error) {
            throw error.response?.data?.message || "Failed to get the info"
        }
    },

}