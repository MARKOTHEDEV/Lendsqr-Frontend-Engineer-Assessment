import api from "./api"



type User={
    "createdAt":string,"orgName":string,"userName":string,"email":string,
    "phoneNumber":string,"lastActiveDate":string,
    "profile":{
        "firstName":string,
        "lastName":string,
        "phoneNumber":string,
        "avatar":string,
        "gender":string,"bvn":string,
        "address":string,
        "currency":string},
        "guarantor":{
            "firstName":string,"lastName":string,"phoneNumber":string,"gender":string,"address":string},
        "accountBalance":string,
        "accountNumber":string,
        "socials":{
        "facebook":string,"instagram":string,"twitter":string},
        "education":{"level":string,"employmentStatus":string,"sector":string,"duration":string,
        "officeEmail":string,"monthlyIncome":string[],"loanRepayment":string},"id":string}

export const getUsersApi =async ():Promise<User[]>=>{
    const resp = await api.get('users/')
    return  resp.data
}

export const getUsersDetailsApi =async (id:string):Promise<User>=>{
    const resp = await api.get(`users/${id}`)
    return  resp.data
}