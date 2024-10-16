import { post } from './index'
export function getFoodPage(data) {
  return post({
    url: `/food/page`,
    data
  })
}
export function addFood(data) {
  return post({
    url: `/food/add`,
    data
  })
}
