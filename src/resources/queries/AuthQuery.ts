import { useQuery, useMutation, useQueryClient } from "react-query";
import * as api from "../api/AuthAPI";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuthContext";

export const useUser = () => {
  return useQuery('users', api.getUser);
}

export const useRegister = () => {
  const { setIsAuth } = useAuth();

  return useMutation(api.register, {
    onSuccess: () => {
      setIsAuth(true);
      toast.success('登録が完了しました。')
    },
    onError: () => {
      toast.error('登録に失敗しました。')
    }
  })
}

export const useLogin = () => {
  const { setIsAuth } = useAuth();

  return useMutation(api.login, {
    onSuccess: (user) => {
      if (user) {
        setIsAuth(true);
        toast.success('ログインに成功しました。');
      }
    },
    onError: () => {
      toast.error('ログインに失敗しました。');
    }
  })
}

export const useLogout = () => {
  const { setIsAuth } = useAuth();

  return useMutation(api.logout, {
    onSuccess: (user) => {
      if (user) {
        setIsAuth(false);
        toast.success('ログアウトしました。')
      }
    },
    onError: () => {
      toast.error('ログアウトに失敗しました。');
    }
  })
}