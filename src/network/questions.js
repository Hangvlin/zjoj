import { request } from "./request";

/**
 * 获取问题
 */
export function getQuestions({ page, size }) {
  return request({
    url: "/problems",
    method: 'get',
    params: {
      page,
      size
    }
  });
}

/**
 * 获取比赛
 */
export function getCompetition() {
  return request({
    url: "/contests",
    method: 'get',
  });
}




/**
 * 获取单个比赛的详细信息 
 */
export function getCompetitionMenu(id) {
  return request({
    url: "/contests/" + id,
    method: 'get',
  });
}