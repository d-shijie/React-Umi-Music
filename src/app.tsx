// 运行时配置
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
import { message } from 'antd';
import { RequestConfig, RunTimeLayoutConfig } from './.umi/exports';

export async function getInitialState(): Promise<{
  name: string;
  appTitle: string;
}> {
  return { name: 'username', appTitle: 'REACT UMI MUSIC' };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    pure: true,
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    title: initialState?.appTitle,
    menu: {
      locale: false,
    },
    layout: 'mix',
    token: {
      sider: {
        //侧边菜单的配置 ，这里具体看文档
        // colorBgCollapsedButton: '#fff',
        // colorTextCollapsedButtonHover: '#1677ff',
        // colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
        // colorMenuBackground: '#fff',
        // colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.85)',
        // colorMenuItemDivider: 'rgba(255,255,255,0.15)',
        // colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
        // colorBgMenuItemSelected: 'rgba(0,0,0,0.05)',
        // colorTextMenuSelected: '#1677ff',
        // colorTextMenuItemHover: '#1677ff',
        // colorTextMenu: 'rgba(255,255,255,0.75)',
        // colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
        // colorTextMenuTitle: 'rgba(255,255,255,0.95)',
        // colorTextMenuActive: '#1677ff',
        // colorTextSubMenuSelected: '#1677ff',
      },
    },
  };
};
export const request: RequestConfig = {
  timeout: 20000,
  withCredentials: true,
  errorConfig: {
    errorHandler(error: any) {
      const { response } = error;
      const status = response;
      switch (status) {
        case 400:
          message.error('请求参数错误');
          break;
        case 403:
          message.error('请求权限异常');
          break;
        case 404:
          message.error('请求地址错误');
          break;
        case 500:
          message.error('服务器错误');
          break;
      }
    },
    errorThrower() {},
  },
  requestInterceptors: [
    (config: any) => {
      if (config.method?.toLowerCase() === 'post') {
        const nowStamp = new Date().getTime();
        config.url = config.url + `?t=${nowStamp}`;
      }
      return config;
    },
  ],
  responseInterceptors: [
    (response: any) => {
      return response;
    },
  ],
};
