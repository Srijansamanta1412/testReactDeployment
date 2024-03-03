import React from "react";
import { useParams } from "react-router";
function Services(){
    let {fname}=useParams();
    return(
        <p>{fname} has Entered</p>
    )
}
export {Services};