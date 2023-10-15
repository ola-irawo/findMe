import React from 'react'
import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";

const Setting = () => {
    const hankoApi = process.env.REACT_APP_HANKO_API_URL

    useEffect(() => {
        register(hankoApi).catch((error) => {
          // handle error
        });
     }, []);

  return (
    <section>
        <hanko-profile />;
    </section>
  )
}

export default Setting
