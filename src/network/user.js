import { request } from "./request";

/**
 * 注册
 */
export function registerUser({ action, username, password, nickname, email, mobilephone }) {
  return request({
    url: "/users/actions",
    method: 'post',
    params: {
      action,
      username,
      password,
      nickname,
      email,
      mobilephone
    }
  });
}

/**
 * 登录
 */
export function loginUser({ action, username, password }) {
  return request({
    url: "/users/actions",
    method: 'post',
    params: { action, username, password },
  });
}
