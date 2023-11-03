import { request } from '@umijs/max';

export async function testApi() {
  return request<API.Response>('/api/banner', {
    method: 'get',
  });
}
