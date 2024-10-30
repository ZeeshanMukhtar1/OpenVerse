
import {useSearchParams} from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function Transfer(){ 
  const navigate=useNavigate();
  const [searchParams] = useSearchParams();
  const name=searchParams.get("name");
  const id=searchParams.get("to");
  const [amount,setAmount]=useState("");
    return(
        <div className="bg-slate-600 h-screen flex justify-center">

        <div className="flex justify-center  flex-col">
        <div className="flex  w-96 h-auto flex-col border-2 bg-white text-center gap-2 p-8 rounded-lg shadow-lg shadow-black">
        <div className="font-bold text-4xl pb-8 ">Transfer Money</div>
        <div className="flex gap-2 ">
        <div className="w-12 h-12 pt-1 shadow-lg shadow-black bg-green-500  rounded-full flex-col text-center">
        <div className="text-center text-4xl text-white"  >{name.charAt(0).toUpperCase()}</div>
        </div>
        <div className="text-center  text-2xl font-bold pt-2">{name}</div>

        </div>
        <h1 className="text-start pt-2 font-semibold pb-1 ">Amount in Rs </h1>
        <input onChange={(e)=>{
          setAmount(e.target.value);
        }} className="border border-slate-500 p-1  "></input>
        <button onClick={
         async ()=>{
            const token =localStorage.getItem("token");
            if(!token){
              window.location.href="/signin";
            }
            try{
            const res= await axios({
              method:"POST",
              url:"http://localhost:3000/api/v1/account/transfer",
              headers:{
                Authorization:`Bearer ${token}`
              },
              data:{
                to:id,
                amount: Number(amount) ,
              }
            }
           
           
    ) 
    navigate("/done");
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
        }  className="bg-green-500 rounded-lg p-2 font-semibold my-3 mt-10 shadow-lg shadow-black">Transfer Money</button>


      </div>
        </div>

        </div>
    )
} 