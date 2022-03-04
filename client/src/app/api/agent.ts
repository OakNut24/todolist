import axios, { AxiosResponse } from "axios";


axios.defaults.baseURL = process.env.REACT_APP_API_URL;
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
    get: (url: string, params?: URLSearchParams) => axios.get(url, { params }).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Tasks = {
    list: (params: URLSearchParams) => requests.get('tasks', params),
    // createTask: (product: any) => requests.postForm('products', createFormData(product)),
    // updateTask: (product: any) => requests.putForm('products', createFormData(product)),
    // deleteTask: (id: number) => requests.delete(`products/${id}`)
}

const agent = {
    Tasks
}

export default agent;