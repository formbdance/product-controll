import axios from "axios";


const api_url = 'http://localhost:5000/api';

export async function createClient(options) {
    const res = await axios.post(`${api_url}/client`, options.data, 
    {
        headers: {
            'Content-Type': 'application/json'
        }
    },
    )
    if (res.status !== 200) {
        throw new Error('Ошибка при добавление клиента!')
    }
    
    return res.data
}

export async function deleteClient() {
    const res = await axios.delete(`${api_url}/client`, 
    {
        headers: {
            'Content-Type': 'application/json'
        }
    },
    )
    if (res.status !== 200) {
        throw new Error('Ошибка при удалении клиента!')
    }
    
    return res.data
}

export async function saveCategory(options) {
    const res = await axios.post(`${api_url}/client/categories`, options.data, 
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

// сохраняем продукт
export async function saveProduct(options) {
    const res = await axios.post(`${api_url}/client/categories/product`, options.data, 
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

// удаляем продукт
export async function deleteProduct(options) {
    const res = await axios.delete(`${api_url}/client/categories/product/${options.data.category}/${options.data.formalId}`, 
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

export async function getClient(options) {
    const res = await axios.get(`${api_url}/client/${options.uuid}`)
    if (res.status !== 200) {
        throw new Error('Ошибка при получении данных!')
    }
    return res.data
}

