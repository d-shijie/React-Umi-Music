import { request } from '@/.umi/exports';

// 检测登录状态
export function checkLoginStatusApi() {
  return request<API.Response>(`/api/login/status`, {
    method: 'post',
  });
}
// 生成二维码key
export function createQrKeyApi() {
  return request<API.Response>('/api/login/qr/key', {
    method: 'post',
  });
}

// 生成二维码
export function createQrApi(key: string) {
  return request<API.Response>(`/api/login/qr/create`, {
    method: 'post',
    data: {
      key,
    },
  });
}

// 检测扫码状态 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功
export function checkQrStatusApi(key: string) {
  return request<API.Response>(`/api/login/qr/check`, {
    method: 'post',
    data: {
      key,
    },
  });
}
// 检测登录状态
export function getUserInfoApi(uid: number) {
  return request<API.Response>(`/api/user/detail`, {
    method: 'post',
    params: {
      uid,
    },
  });
}
