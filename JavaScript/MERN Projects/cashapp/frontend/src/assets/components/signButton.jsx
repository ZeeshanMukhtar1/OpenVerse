


export   function SignButton({text, onClick}){
    return(
        <button onClick={onClick} className="bg-blue-500 rounded-lg mt-4 py-1 w-full hover:bg-blue-400">{text}</button>
    )
}