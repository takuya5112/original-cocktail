import { FC, memo } from 'react'
import { useAuth } from '../../hooks/useAuthContext'
import { useLogout } from '../../queries/AuthQuery';

export const Recipes: FC = memo(() => {
  const logout = useLogout();
  const { isAuth, setIsAuth } = useAuth();
  
  return (
    <div>
      <h1>レシピ一覧ページ</h1>
      { isAuth &&  <button onClick={() => logout.mutate()}>ログアウト</button>}
    </div>
  )
});