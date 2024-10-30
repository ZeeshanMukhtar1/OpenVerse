import {useState,useEffect} from "react";
import axios from "axios";
import {InputBox} from "./inputBox";
import {useNavigate} from "react-router-dom";

export function Users(){
    const navigate=useNavigate();
    const [filter,setFilter]=useState("");
    const [users,setUsers]=useState([]);
    
    useEffect(()=>{
        const token=localStorage.getItem("token");
        if(!token){
            window.location.href="/signin";
        }
        const fun=async ()=>{
             
          try{
           const  res= await axios({
                method:"GET",
                url:`http://localhost:3000/api/v1/user/information?filter=${filter}`, 
                headers:{
                    Authorization:`Bearer ${token}`
                } 
            })
             setUsers(res.data.users);
        }
        catch(err){
            if(err.response){
                alert(err.response.data.message);
            } else {
                alert("Something went wrong");
            }
            return;
        }
        }
        fun();
    
    
    
    
    },[filter])


    return(
        <div>
        <input onChange={(e)=>{
            setFilter(e.target.value);
        }}  className="w-96 ml-6 mt-4 p-3  border-2 border-slate-300  placeholder-blue-400 hover:border-blue-500"  placeholder="Search users...." ></input>
        <div>
            {users.map((user)=>{
                if(user.id===localStorage.getItem("id")){
                    return(
                        <div></div>
                    )
                }
                    else{
                
                return(
                   <div>
                        <div className="border border-1 p-3 flex gap-4 justify-between mt-6 ">
                       <div className="flex gap-2 text-center p-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white text-2xl text-center text-wrap">{user.firstname.charAt(0).toUpperCase()} </div>
                            
                                <div className="text-center mt-1">{user.firstname}  {user.lastname}</div> 

                           
                            </div>
                            
                           
                            <button onClick={()=>{
                               navigate(`/transfer?to=${user.id}&name=${user.firstname} ${user.lastname}`); 
                            }} className="border-2 bg-blue-500 w-auto  p-2 rounded-lg  hover:bg-blue-400 ">Send Money</button>
                            
                            
                            </div>
                       
                      </div>
                   
                )
                    }
  }) }
        </div>
    </div>
    )




}

