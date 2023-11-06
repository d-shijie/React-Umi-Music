/* eslint-disable */
declare namespace API {
  interface Response {
    code: number;
    data: any;
    success?: boolean;
    message: string;
  }
  interface UserInfo {
    id?: string;
    name?: string;
    nickName?: string;
    email?: string;
    gender?: UserGenderEnum;
  }
}
