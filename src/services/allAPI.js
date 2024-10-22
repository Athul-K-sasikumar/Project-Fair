import commonAPI from "./commonAPI"
import SERVERURL from "./serverUrl"

export const registerAPI= async(reqBody)=>{
return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

export const addProjectApi =async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVERURL}/add-project`,reqBody,reqHeader)
}

export const homeProjectsApi=async ()=>{
    return await commonAPI("GET",`${SERVERURL}/home-projects`,"")
}

export const allProjectsApi=async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-projects`,"",reqHeader)
}

export const userProjectsApi=async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/user-projects`,"",reqHeader)
}
