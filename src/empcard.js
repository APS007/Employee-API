import React from "react";
import { Link } from "react-router-dom";

const empcard = (props) => {
    const { id, first_name, last_name, email } = props.employees;
    return (
        <div>
            <div>
                
                    <div>{first_name} {last_name}</div>
                    <div>{email}</div>
                <br /><br />
                
            </div>
        </div>
    );
};

export default empcard;
