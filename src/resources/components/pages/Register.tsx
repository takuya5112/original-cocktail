import { FC, memo, useState } from 'react'

import { useRegister } from '../../queries/AuthQuery';

export const Register: FC = memo(() => { 
  const register = useRegister();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register.mutate({ name, email, password });
  }
  
  return (
    <>
    <div>
      <div>会員登録ページ</div>
      <form onSubmit={handleRegister}>
        <label>
          <div>名前</div>
          <input 
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
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
        <button type="submit">登録</button>
      </form>
    </div>
    </>
    
  )
});