import React, { useEffect, useCallback, useMemo } from 'react'
import { register, Hanko} from "@teamhanko/hanko-elements";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const hankoApi = process.env.REACT_APP_HANKO_API_URL

    const navigate = useNavigate();
    const hanko = useMemo(() => new Hanko(hankoApi), []);
    console.log(hanko)

    const redirectAfterLogin = useCallback(() => {
      navigate("/user-details");
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
    </div>
  )
}

export default Login