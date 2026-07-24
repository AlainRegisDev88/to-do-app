import api from './api' 

const projectsServices = {

    fetchProjects: async () =>{
        try{
            const response = await api.get('/projects');
        return response.data;

        }
        catch(error){
            console.log(error)
            throw error
        } 
    },

    addProject: async ({newProject}) =>{
        try{
            const response = await api.post('/add-project', newProject)
            return response

        }catch(error){
            console.log(error)
            throw error
        }
    }

}

export default projectsServices;