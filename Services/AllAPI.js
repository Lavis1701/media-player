import { CommonAPI } from "./CommonAPI";
import { server_url } from "./Server_url";

// Upload a Video 
export const uploadVideoAPI = async(video)=>{
    return await CommonAPI("POST",`${server_url}/allVideos`,video)
}

// Get all Videos

export const getALLuploadedVideosAPI = async()=>{
    return await CommonAPI("GET",`${server_url}/allVideos`,"")
}

// Get a Video

export const getVideoAPI = async(id)=>{
    return await CommonAPI("GET",`${server_url}/allVideos/${id}`,"")
}

// Delete a Video 

export const deleteVideoAPI = async(id)=>{
    return await CommonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}


// Add history

export const addHistoryAPI = async(video)=>{
    return await CommonAPI("POST",`${server_url}/history`,video)
}

// Get history

export const getHistoryAPI = async(Video)=>{
    return await CommonAPI("GET",`${server_url}/history`,"")
}

// Delete a History

export const deleteHistoryAPI = async(id)=>{
    return await CommonAPI("DELETE",`${server_url}/history/${id}`,{})
}

// Add category

export const addcategoryAPI = async(category)=>{
    return await CommonAPI("POST",`${server_url}/category`,category)
}

// Get category

export const getcategoryAPI = async()=>{
    return await CommonAPI("GET",`${server_url}/category`,"")
}

// Delete category

export const deletecategoryAPI = async(id)=>{
    return await CommonAPI("DELETE",`${server_url}/category/${id}`,{})
}

// Update Category

export const updateCategoryAPI=async(id,categoryDetails)=>{
    return await CommonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}