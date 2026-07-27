import api from './api'

const taskService = {
    saveTask: async (taskData) => {
        try {
            const payload = {
                taskData: {
                    title: taskData.title,
                    description: taskData.description || '',
                    priority: taskData.priority || 'Low',
                    task_status: 'Pending',
                    due_date: taskData.dueDate || null,
                    project_id: 1
                }
            }

            const response = await api.post('/tasks', payload)
            return response.data
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    retrieveTasks: async () => {
        try {
            const response = await api.get('/tasks');
            return response
        } catch (error) {
            console.log(error)
            throw error
        }


    },

    retrieveTask: async (taskId) =>{
        try{
            const response = await api.get(`/task/${taskId}`)
        }catch(error){
            console.log(error)
            throw error
        }
    }
}

export default taskService;