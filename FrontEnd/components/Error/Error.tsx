import React from "react";
import stye from "./error.module.css"
import { ErrorProps } from "./IError";

const Error = ({msg}:ErrorProps):JSX.Element=>{

    return(
        <div className={stye.error}>
            <p>{msg}</p>
        </div>
    )

};

export default Error;