import { request } from '@umijs/max';

export async function getBannerApi() {
  return request<API.Response>('/api/banner?type=2', {
    method: 'get',
  });
}
