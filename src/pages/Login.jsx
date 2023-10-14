import React, { useEffect, useCallback, useMemo } from 'react'
import { register, Hanko } from "@teamhanko/hanko-elements";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const hankoApi = process.env.REACT_APP_HANKO_API_URL
    console.log(hankoApi)

    const navigate = useNavigate();
    const hanko = useMemo(() => new Hanko(hankoApi), []);
    console.log(hanko.user.client)

    const redirectAfterLogin = useCallback(() => {
      navigate("/");
    }, [navigate]);

    useEffect(
      () =>
        hanko.onAuthFlowCompleted(() => {
          redirectAfterLogin();
        }),
      [hanko, redirectAfterLogin]
    );

    useEffect(() => {
      register(hankoApi).catch((error) => {
        console.log(error)
      });
    }, []);

  return (
    <div>
        <hanko-auth />
      Login
    </div>
  )
}

export default Login