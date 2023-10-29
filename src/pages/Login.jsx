import React, { useEffect, useCallback, useMemo } from 'react'
import { register} from "@teamhanko/hanko-elements";
import { useNavigate } from 'react-router-dom';
import { hanko, hankoApi } from '../services/hankoAuth/hanko';

const Login = () => {
    const navigate = useNavigate();
    
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
    <section className="login-section">
        <hanko-auth />
    </section>
  )
}

export default Login