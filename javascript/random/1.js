const obj = {
  /**
   * @description: 通过传递的时间戳 找到比该时间戳小的 && 距离最近的值
   * @param timeStamp 传递的时间戳
   * @author lihh
   */
  moveScrollCol(timeStamp) {
    if (!timeStamp) return

    // 通过ref 渲染拿到dom（执行mount方法后 一定能拿到ref的dom值）
    const dom = this.$refs['row-content']
    if (!dom) return

    // 统一将时间格式 转换为数字类型时间戳
    const assignTimeStamp = +new Date(timeStamp)
    let timeStampToKeyMap = new Map()
    // 将对应的时间戳 与 索引值 通过Map（此处不使用WeakMap 是因为Key必须是对象）映射
    this.data.forEach((item, index) =>
      timeStampToKeyMap.set(item.timeStamp, index)
    )
    // 将传递过来的数据进行排序（降序排列）
    const sortData = this.data.sort(
      (a, b) => +new Date(b.timeStamp) - +new Date(a.timeStamp)
    )

    const lessAndEqualIndexForItem = sortData.find(
      (item) => +new Date(item.timeStamp) <= assignTimeStamp
    )
    if (!lessAndEqualIndexForItem) return
    // 拿到对应的key
    const findIndex = timeStampToKeyMap.get(lessAndEqualIndexForItem.timeStamp)
    timeStampToKeyMap = null

    // 后面是高亮的处理
    this.trigger('select', this.data[findIndex])
    const { rowHeight, rowDistance } = this.opts.menu.chart.row
    dom.scrollTop = findIndex * (rowHeight + rowDistance)
    this.highlightIndex = findIndex
  }
}
