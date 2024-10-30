import { useEffect ,useState} from "react";
import axios from "axios";


 export function SuccesfulTransaction() {
    const [balance,setBalance]=useState(0);
    useEffect(()=>{
    const token =localStorage.getItem("token");
    if(!token){
        window.location.href = "/login";
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
        
    };
    fun();

},[])

  return (
    <div>
      <h1>Transaction successful!</h1>
      <h1>Your current balance is {balance}</h1>
      <button  className="border-1 bg-blue-500 w-auto rounded-md" onClick={()=>window.location.href="/dashboard"}>Dashboard</button>
    </div>

  );
}