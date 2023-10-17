import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";

const Logout = () => {
  const navigate = useNavigate();
  const [hankoInstance, setHankoInstance] = useState("");

  const hankoApi = process.env.REACT_APP_HANKO_API_URL
  const hanko = new Hanko(hankoApi);

  const g = async () => {
    const user = await hankoInstance.user
    console.log(user.getAuthCookie())
  }

  useEffect(() => {
    setHankoInstance(hanko)
    g()
  }, [])

  const signOut = async () => {
    if(hankoInstance){
      console.log("logging out")
      hankoInstance?.user.logout()
      navigate("/")
    }
  }

  return <button onClick={signOut}>Logout</button>
}

export default Logout;
