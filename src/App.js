import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "./api/employees";
import EmpList from "./EmpList";

function App() {
  const [Employees, setEmployees] = useState([]);
  const retrieveEmployees= async () =>{
    const response = await api.get("/employees");
    console.log(response.data)
    return response.data;
  }
  useEffect(()=>{
    const getEmployees= async() =>{
      const allEmployees = await retrieveEmployees();
      //console.log(allEmployees)
      setEmployees(allEmployees)
    };getEmployees();
  },[]);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => (
              <EmpList {...props} Employees={Employees}/>
              )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
