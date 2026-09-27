import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState("dashboard");
  const [updateData, setUpdateData] = useState(null);
//   console.log(updateData);

  const [employees, setEmployees] = useState(() => {
    let emp = localStorage.getItem("employees");
    return emp ? JSON.parse(emp) : [];
  });

    console.log(employees);
    

  //   delete section
  function deleteEmployees(id) {
    const deleted = employees.filter((val) => val.id !== id);

    setEmployees(deleted);

    localStorage.setItem("employees", JSON.stringify(deleted));
  }

  //   edit section
  function updateEmployee(id) {
    const updated = employees.find((val) => val.id === id);
    
    setUpdateData(updated);
    
  }

//   update status

function updateEmployeeStatus(id,status){
    const updatedEmployee = employees.map((employee)=>{
        if(employee.id === id){
            return {
                ...employee,
                isActive: status
            }
        }
        return employee
    })
    setEmployees(updatedEmployee)

    localStorage.setItem('employees', JSON.stringify(updatedEmployee))

}

  return (
    <MyStore.Provider
      value={{
        toggle,
        setToggle,
        employees,
        setEmployees,
        deleteEmployees,
        updateEmployee,
        updateData,
        setUpdateData,
        updateEmployeeStatus
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
