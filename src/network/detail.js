import { request } from "./request";


/**
 * 获取问题的详细信息
 */
export function getDetailQuestion(id) {
  return request({
    url: "/problems/" + id,
    method: 'get'
  });
}

/** 
 * 获取问题的标签
*/
export function getQuestionTags(id) {
  return request({
    url: "/problems/" + id + '/tags',
    method: 'get'
  });
}





