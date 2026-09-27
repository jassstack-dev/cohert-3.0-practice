import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import AllEmployee from "./components/AllEmployee";
import { MyStore } from "./context/MyContent";

const App = () => {
  const { toggle } = useContext(MyStore);

  return (
    <div>
      <Navbar />
    {toggle === "dashboard" && <Dashboard />}

{toggle === "employees" && <AllEmployee  />}

{toggle === "addEmployee" && <Form />}
    </div>
  );
};

export default App;
