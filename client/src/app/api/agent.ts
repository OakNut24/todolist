import axios, { AxiosResponse } from "axios";


axios.defaults.baseURL = "http://localhost:5000/api/";
// axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;


function createFormData(item: any) {
    let formData = new FormData();
    for (const key in item) {
        formData.append(key, item[key])
    }
    return formData;
}

const requests = {
    get: (url: string, googleId: string) => axios.get(url + `/${googleId}`).then((response) => response.data),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    patch: (url: string, taskId: string, body: {}) => axios.patch(url + `/${taskId}`, body).then(responseBody),
    delete: (url: string, id: string) => axios.delete(url + `/${id}`).then(responseBody),
    postForm: (url: string, data: FormData) => axios.post(url, data, {
        headers: { 'Content-type': 'multipart/form-data' }
    }).then(responseBody)
}

const Tasks = {
    list: (googleId: string) => requests.get('task', googleId),
    createTask: (task: any) => requests.post('task', task),
    updateTask: (taskId: string, task: any) => requests.patch('task', taskId, task),
    deleteTask: (id: string) => requests.delete('task', id),
}

const agent = {
    Tasks
}

export default agent;