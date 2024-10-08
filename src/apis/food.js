import { get } from './index'
export function getFoodPage() {
  return get({
    url: `/food/page`
  })
}
