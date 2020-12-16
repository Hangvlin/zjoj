import { request } from "./request";


/**
 * 获取问题的详细信息
 */
export function searchQuestions({action, key, page, pid}) {
  return request({
    url: "/problems/actions",
    method: 'post',
    params: {
      action,
      key,
      page,
      pid
    }
  });
}

/**
 * 获取问题的详细信息
 */
export function searchCompetitions({action, keyword, page, pid}) {
  return request({
    url: "/contests/actions",
    method: 'post',
    params: {
      action,
      keyword,
      page,
      pid
    }
  });
}