import { useEffect, useState } from "react";
import AddPerson from "./AddPerson";
import RetrievePerson from "./RetrievePerson";

const { default: Button } = require("./Button")

const Directory = (props)=>{
    const[person,setPerson] = useState(props.change);
    useEffect(()=>{
        setPerson(props.change);
    })
    return(
        <>
            {
                person ? (<AddPerson></AddPerson>) : <RetrievePerson></RetrievePerson>
            }
        </>
    )
}
export default Directory;