import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";
import { hanko } from "../services/hankoAuth/hanko";
import { FaSignOutAlt } from "react-icons/fa";

const Logout = () => {
  const navigate = useNavigate();
  const [hankoInstance, setHankoInstance] = useState("");

  const userInstance = async () => {
    const user = await hankoInstance.user
  }

  useEffect(() => {
    setHankoInstance(hanko)
    userInstance()
  }, [])

  const signOut = async () => {
    if(hankoInstance){
      console.log("logging out")
      hankoInstance?.user.logout()
      navigate("/login")
      localStorage.clear()
    }
  }

  return <button onClick={signOut}><FaSignOutAlt /></button>
}

export default Logout;
