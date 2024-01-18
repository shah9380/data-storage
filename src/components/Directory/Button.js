const Button = (props)=>{
    return(
        <button onClick={props.change} className="bg-blue-600 rounded-sm mr-4 text-white py-1 px-2" value={props.value}>{props.content}</button>
    )
}
export default Button;