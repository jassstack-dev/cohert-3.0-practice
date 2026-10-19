import { createContext, useEffect, useState } from "react";
import { mockLeads } from "../data/leads";
import { toast } from "react-toastify";

export const store = createContext();

export const DataContextApi = ({ children }) => {
  const [leads, setLeads] = useState(() => {
    return JSON.parse(localStorage.getItem("leads")) || mockLeads;
  });
  const [searchLeads, setSearchLeads] = useState("");

  function deleteBtn(id) {
    const deleteLead = leads.filter((val) => {
      return val.id !== id;
    });
    setLeads(deleteLead);
    localStorage.setItem("leads", JSON.stringify(deleteLead));
    toast.success("deleted successfully");
  }

  const [updatePopup, setUpdatePopup] = useState(false);
  const [updateLead, setUpdateLead] = useState(null)


  function updateBtn(id) {
   
   const updated = leads.find((val)=> val.id === id)
   setUpdateLead(updated || null)
  }

  return (
    <store.Provider
      value={{
        leads,
        setLeads,
        searchLeads,
        setSearchLeads,
        deleteBtn,
        updateBtn,
        updatePopup,
        setUpdatePopup,
        updateLead, 
        setUpdateLead
      }}
    >
      {children}
    </store.Provider>
  );
};
