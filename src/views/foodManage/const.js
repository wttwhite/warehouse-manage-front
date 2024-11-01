export const TypeOps = {
  1: { label: '谷类' },
  2: { label: '蔬菜' },
  3: { label: '水果' },
  4: { label: '豆类及其制品' },
  5: { label: '禽肉类' },
  6: { label: '水产品' },
  7: { label: '蛋类' },
  8: { label: '奶及奶制品' },
  9: { label: '休闲食品和速食品' },
  10: { label: '饮料和冷饮类' },
  11: { label: '油及调味品' },
  12: { label: '火锅底料' },
  13: { label: '其他' }
}
export const UnitOps = {
  g: { label: 'g' },
  pack: { label: '包' },
  he: { label: '盒' },
  dai: { label: '袋' }
}

import dayjs from 'dayjs'
export const TableColumnList = [
  { prop: 'name', label: '食材名称', minWidth: 100 },
  { prop: 'type', label: '食材类型', func: row => TypeOps[row.type].label, minWidth: 100 },
  {
    prop: 'inventory',
    label: '库存',
    func: row => {
      return row.inventory + UnitOps[row.unit].label
    },
    minWidth: 100
  },
  {
    prop: 'productDate',
    label: '生产日期',
    func: row => {
      return row.productDate && dayjs(row.productDate).format('YYYY-MM-DD')
    },
    minWidth: 100
  },
  {
    prop: 'sellByDate',
    label: '保质期',
    func: row => {
      return row.sellByDate && dayjs(row.sellByDate).format('YYYY-MM-DD')
    },
    minWidth: 100
  },
  {
    prop: 'createTime',
    label: '创建时间',
    func: row => {
      return dayjs(row.createTime).format('YYYY-MM-DD HH:mm:ss')
    },
    minWidth: 150
  }
]
