import { FC, useEffect, memo, ReactComponentElement, useCallback } from "react";
import { css, keyframes } from "@emotion/react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { Recipes } from "../components/pages/Recipes";
import { useAuth } from "../hooks/useAuthContext";
import { useUser } from "../queries/AuthQuery";

export const Router: FC = memo(() => {
  const { isAuth, setIsAuth } = useAuth();
  const { isLoading, data: authUser } = useUser();

  useEffect(() => {
    if (authUser) {
      setIsAuth(true);
    }
  }, [authUser]);
  
  console.log(isAuth);
  console.log(authUser);

  if (isLoading) return <div>Loading...</div>

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuth ? <Recipes /> : <Navigate to ="/login" />} />
        <Route path="/login" element={!isAuth ? <Login/> : <Navigate to="/" />} />
        <Route path="/register" element={!isAuth ? <Register /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
});
