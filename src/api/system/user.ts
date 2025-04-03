import { Alova } from '@/utils/http/alova/index';

/**
 * @description: 获取用户信息
 */
export function getUserInfo() {
  return Alova.Get<InResult>('/admin_info', {
    meta: {
      isReturnNativeResponse: true,
    },
  });
}

/**
 * @description: 用户登录
 */
export function login(params) {
  return Alova.Post<InResult>('/login', params, {
    meta: {
      ignoreToken: true,
      isReturnNativeResponse: true,
    },
  });
}

/**
 * @description: 用户登出
 */
export function logout(params) {
  return Alova.Post('/logout', {
    params,
  });
}
