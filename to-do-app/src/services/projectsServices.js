import api from './api' 

const projectsServices = {

    fetchProjects: () =>{
        try{
            const response = api.get('/projects');
        return response;

        }
        catch(error){
            console.log(error)
            throw error
        }
        
    }

}

export default projectsServices;