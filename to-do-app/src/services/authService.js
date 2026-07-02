import axios from "axios";

const API_URL = '/api/auth'

const authService = {

    //signup
    signup: async ({name, email, password}) => {
        try {
            const response = await axios.post(`${API_URL}/signup`, {
                name,
                email,
                password
            })

            if (response.data.token) {
                localStorage.setItem('token', response.data.token)
            }
            return response.data
        } catch (error) {
            throw error.response?.data?.message || 'Signup Failed'
        }

    },
    
    // Login
    login: async(email, password) => {
        try{
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password
            })

            if (response.data.token){
                localStorage.setItem('token', response.data.token)
            }

            return response.data
        }catch(error){
            throw error.response?.data?.message || "Login failed"
        }
    },

    //logout
    logout: () => {
        localStorage.removeItem('token');
    }, 

    // Get Token
    getToken: () =>{
        return localStorage.getItem('token');
    },

    // check if the user is logged in

    isLoggedIn: () =>{
        return !!localStorage.getItem('token');
    }
}

export default authService;