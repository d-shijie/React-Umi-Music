/* eslint-disable */
declare namespace API {
  interface Response {
    code: number;
    data: unknown;
    success?: boolean;
  }
  interface UserInfo {
    id?: string;
    name?: string;
    nickName?: string;
    email?: string;
    gender?: UserGenderEnum;
  }
}
