import { request } from "./request";

/**
 * 提交问题
 */
export function commitCode({ action, uid, source, pid, cid, language }) {
  return request({
    url: "/problems/actions",
    method: 'post',
    params: {
      action,
      uid,
      source,
      pid,
      cid,
      language
    }
  });
}

/**
 * 返回轮询结果
 */
export function getResult({ action, sid }) {
  return request({
    url: "/problems/actions",
    method: 'post',
    params: {
      action,
      sid
    }
  });
}