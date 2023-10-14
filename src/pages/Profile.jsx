import React from 'react'
import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import Logout from './Logout';

const Profile = () => {
    const hankoApi = process.env.REACT_APP_HANKO_API_URL
    useEffect(() => {
        register(hankoApi).catch((error) => {
          // handle error
        });
     }, []);

  return (
    <div>
     <hanko-profile />;
    </div>
  )
}

export default Profile
