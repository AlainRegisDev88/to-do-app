import api from './api'

const taskService = {

    saveTask: async (taskData) =>{
        try{
            const response = await api.post('/tasks', {
                taskData
            })

            return response.data
        }

        catch(error){
            console.log(error)
        }
    }


}

export default taskService;