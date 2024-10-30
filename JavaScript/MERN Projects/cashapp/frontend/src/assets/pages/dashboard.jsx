import{useEffect,useState} from 'react'
import axios from 'axios'
import {Users} from '../components/users'

export function Dashboard(){
const [balance,setBalance]=useState("");
const [myname,setMyname]=useState("");

    useEffect( ()=> {
        const token = localStorage.getItem("token");
        if(!token){
            window.location.href="/signin";
        }
      
        const fun = async() => {
            let res;
            try {
                res = await axios({
                    method: "GET",
                    url: "http://localhost:3000/api/v1/account/balance",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            } catch(err) {
                if(err.response){
                    alert(err.response.data.message);
                } else {
                    alert("Something went wrong");
                }
                return;
            }
            setBalance(res.data.balance);
            setMyname(res.data.name);
        };
        fun();
    }, []);


  

    return(
        
        <div className="flex h-screen bg-white    flex-col  " >
           
            <div className="  flex  justify-between  shadow-md shadow-black  border-transparent border-2 hover:border-blue-500">
                <div className="font-bold text-g text-2xl font-roboto p-4 px-6`">Cash App</div>
                <div className="font-light text-black my-5 text-2xl font-roboto px-4">Greetings , {myname}</div>
            </div>
            <div className="my-8 p-6 font-bold text-xl">Your Balance: Rs {balance}</div>
            <div className="font-bold text-2xl px-6 ">Users</div>
            <Users></Users>
            
            
              </div>
             

    )
}