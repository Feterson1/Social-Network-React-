import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers:     {
       "API-KEY": "abc58fe7-8499-4124-af29-40ca07cdc00d",
   }
});


export const usersAPI = {
   getUsers(currentPage, pageSize) {
       return instance.get(`users?page=${currentPage}&count=${pageSize}`)
           .then(response => {
               return response.data;
           });
   },
    userUnFollow(userId){
   
      return instance.delete(`follow/${userId}`)
      .then(response => {
         
         return response.data;
      })
   
     
   },
   userFollow(userId){
      return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data;
      
      })
   
      
   }



}



