import {http} from '@/api_servers/http'


export async function get_knowledge_base_list() {
    const args = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('Authorization')
        }
    }

    const response = await http(process.env.NEXT_PUBLIC_PREFIX + process.env.NEXT_PUBLIC_KB_LIST, args)

    console.log('response', response)

    if (response) {
        return response['list']
    }
    else {
        return []
    }
}


export async function kb_create(name, embedding_model_list) {
    const args = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('Authorization')
        },
        body: JSON.stringify({
            "name": name,
            "embedding_model_list": embedding_model_list
        })
    }

    const response = await http(process.env.NEXT_PUBLIC_PREFIX + process.env.NEXT_PUBLIC_KB_CREATE, args)

    console.log('response', response)
}

export async function kb_delete(kb_id) {
    const args = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('Authorization')
        },
        body: JSON.stringify({
            "kb_id": kb_id,
        })
    }

    const response = await http(process.env.NEXT_PUBLIC_PREFIX + process.env.NEXT_PUBLIC_KB_DELETE, args)

    console.log('response', response)
}


export async function get_kb_data_list(kb_id) {
    const args = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('Authorization')
        },
        body: JSON.stringify({
            "kb_id": kb_id,
        })
    }

    const response = await http(process.env.NEXT_PUBLIC_PREFIX + process.env.NEXT_PUBLIC_KB_DATA_LIST, args)

    console.log('response', response)

    if (response) {
        return response['list']
    }
    else {
        return []
    }
}


export async function kb_data_import(kb_id, method_id, files) {
    const args = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('Authorization')
        },
        body: JSON.stringify({
            "kb_id": kb_id,
            "method_id": method_id,
            "files": files
        })
    }

    const response = await http(process.env.NEXT_PUBLIC_PREFIX + process.env.NEXT_PUBLIC_KB_DATA_IMPORT, args)

    console.log('response', response)

}


