import axios from "axios";


const api_url = 'http://localhost:5000/api';

export async function saveCategory(options) {
    const res = await axios.post(`${api_url}/categories/${options.uuid}`, options.data, 
    {
        headers: {
            'Content-Type': 'application/json'
        }
    },
    )
    if (res.status !== 200) {
        throw new Error('Ошибка при добавление категории!')
    }
    
    return res.data
}

export async function getCategories(options) {
    const res = await axios.get(`${api_url}/api/categories/${options.uuid}`)
    if (res.status !== 200) {
        throw new Error('Ошибка при получении данных!')
    }
    
    return res.data
}

