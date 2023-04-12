import axios from "axios"

const baseurl = "https://jsonplaceholder.typicode.com/"


//Get request

const Get = async (apiName:string, id:number, params:string) => {
    return await new Promise((resolve, reject) => {
        axios.get(`${baseurl}${apiName}${id ? "/" + id : ""}`, { params: params })
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

//Post Request

const Post = async (apiName:string, body:object) => {
    return await new Promise((resolve, reject) => {
        axios.post(`${baseurl}${apiName}`, body)
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

//Put Request

let Put = async (apiName:string, body:object, id:number) => {
    return await axios.put(`${baseurl}${apiName}/${id}`, body);
};


//Delete Request

let Delete = async (apiName:string, id:number) => {
    return await axios.delete(`${baseurl}${apiName}/${id}`);
};

export {Get , Post , Put , Delete};