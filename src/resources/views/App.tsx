import { FC } from "react";
import { Router } from "../router/Router";
import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { global } from "../styles/global";
import { AuthProvider } from "../hooks/useAuthContext";

export const App: FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      },
      mutations: {
        retry: false
      }
    }
  });

  return (
    <>
      <AuthProvider>
        <Global styles={global} />
        <QueryClientProvider client={queryClient}>
          <Router />
          <ToastContainer hideProgressBar={true} />
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
};