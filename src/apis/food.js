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
export function updateFood(data) {
  return post({
    url: `/food/update`,
    data
  })
}
export function deleteFood(data) {
  return post({
    url: `/food/delete`,
    data
  })
}
