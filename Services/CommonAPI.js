import axios from 'axios'


export const CommonAPI = async(httpMethod,url,reqBody)=>{
    let reqConfig={
        method:httpMethod,
        url,
        headers:{
            "Content-Type":"application/json",
        },
        data:reqBody
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch(arr=>{
        return err
    })
}