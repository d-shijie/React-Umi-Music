import { request } from '@umijs/max';

export async function getBannerApi() {
  return request<API.Response>('/api/banner?type=2', {
    method: 'get',
  });
}
export async function getBallApi() {
  return request<API.Response>('/api/homepage/dragon/ball', {
    method: 'get',
  });
}
