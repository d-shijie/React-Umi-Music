/* eslint-disable */
declare namespace API {
  interface Response {
    code: number;
    data: any;
    success?: boolean;
    message: string;
    [x: string]: any;
  }
  interface UserInfo {
    id?: string;
    name?: string;
    nickName?: string;
    email?: string;
    gender?: UserGenderEnum;
    [x: string]: any;
  }
}
