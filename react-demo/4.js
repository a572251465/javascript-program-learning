const UpdateState = 0

/**
 * 初期化每个fiber 的队列
 *
 * @author lihh
 * @param fiber fiber节点
 */
function initializeUpdateQueue(fiber) {
  // 给每个fiber 设置一个updateQueue
  fiber.updateQueue = {
    shared: {
      // 真实的队列
      pending: null
    }
  }
}

/**
 * 创建节点
 *
 * @author lihh
 * @return {{tag: number}} 标签值
 */
function createUpdate() {
  return { tag: UpdateState }
}

/**
 * 将更新的内容添加到fiber中
 *
 * @author lihh
 * @param fiber filer 节点
 * @param update 队列中的元素
 */
function enqueueUpdate(fiber, update) {
  // 拿到fiber中的队列
  const updateQueue = fiber.updateQueue
  const sharedQueue = updateQueue.shared

  // 真实的队列
  const pending = sharedQueue.pending

  // 如果为null的话 表示队列中没有节点
  if (pending === null) {
    // 自己跟自己 头尾相连
    update.next = update
  } else {
    // 把所谓的头节点 放到新的节点后面
    update.next = pending.next
    // 将新的节点 放到头节点的位置
    pending.next = update
  }
  // 维护队列
  updateQueue.shared.pending = update
}

/**
 * 拿到最新的状态 从更新节点中
 *
 * @author lihh
 * @param update 更新的节点
 * @param prevState 上一个状态
 * @return {*}
 */
function getStateFromUpdate(update, prevState) {
  // 判断指定标签
  switch (update.tag) {
    case UpdateState: {

      // 拿到payload 中具体的值
      const { payload } = update
      // 不断将两个值 merge到一起 然后返回
      return Object.assign({}, prevState, payload)
    }
    default:
      return prevState
  }
}

/**
 * 处理节点队列
 *
 * @author lihh
 * @param workInProgress 其实就是所谓的fiber中
 */
function processUpdateQueue(workInProgress) {

  // 拿到fiber 中的队列
  const queue = workInProgress.updateQueue
  const pendingQueue = queue.shared.pending

  // 判断队列不为空的话
  if (pendingQueue !== null) {

    // 将fiber中队列状态重置为null
    queue.shared.pending = null
    // 状态队列 表示最后的节点
    const lastPendingUpdate = pendingQueue
    // 拿到所谓的头节点
    const firstPendingUpdate = lastPendingUpdate.next
    // 将尾节点 链接 到头节点的链切断  将循环链表 切断
    lastPendingUpdate.next = null
    // fiber 最初的状态
    let newState = workInProgress.memoizedState
    // 头节点
    let update = firstPendingUpdate
    // 循环遍历头节点
    while (update) {
      // 将每元素的内容 跟新状态做比较
      newState = getStateFromUpdate(update, newState)
      // 节点前进
      update = update.next
    }
    // 设置新的节点
    workInProgress.memoizedState = newState
  }
}

// 保存状态的fiber
let fiber = { memoizedState: { id: 0 } }
// 初期化队列【queue】
initializeUpdateQueue(fiber)
// 创建节点
let update1 = createUpdate()
// 给节点设置 payload属性
update1.payload = { name: 'zhufeng', id: 3 }
// 将节点添加到fiber中
enqueueUpdate(fiber, update1)
// 创建新的节点
let update2 = createUpdate()
// 给新的节点 设置payload
update2.payload = { age: 14, id: 2 }
// 将新的节点 添加到队列中
enqueueUpdate(fiber, update2)
let update3 = createUpdate()
// 给新的节点 设置payload
update3.payload = { age: 14, id: 1 }
// 将新的节点 添加到队列中
enqueueUpdate(fiber, update3)
// 处理节点队列
processUpdateQueue(fiber)
console.log(fiber)
