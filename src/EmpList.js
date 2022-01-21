import React from "react";
import Employees from "./api/employees";
import Empcard from "./empcard";

const EmpList = (props) => {
    //console.log(props);

    const renderContactList = props.Employees.map((employees) => {
        return (
            <Empcard
                employees={employees}
                key={employees.id}
            />
        );
    });
    return (
        <div>
            <h2>
                Employee List
            </h2>
            <div>{renderContactList}</div>
        </div>
    );
};

export default EmpList;