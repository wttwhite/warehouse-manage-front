import { get, post } from './index'
export function getFoodPage(params) {
  return get({
    url: `/food/page`,
    params
  })
}
export function addFood(data) {
  return post({
    url: `/food/add`,
    data
  })
}
