import { FC, memo, useState } from 'react'
import { css } from "@emotion/react";

import { Link } from 'react-router-dom';
import { useLogin } from '../../queries/AuthQuery';

import { useAuth } from '../../hooks/useAuthContext';
export const Login:FC = memo(() => {
  const { isAuth, setIsAuth } = useAuth();
  const login = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login.mutate({ email, password });
  }

  return (
    <>
      <div css={loginBody}>
        <form onSubmit={handleLogin}>
          <label>
            <div>メールアドレス</div>
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            <div>パスワード</div>
            <input 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)} 
            />
          </label>
          <button type="submit">ログイン</button>
        </form>
        {isAuth ? <h1>ログイン中</h1> : <Link to="/register">会員登録はこちら</Link>}
      </div>
    </>
  )
});

const loginBody = css`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to left, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);
`
