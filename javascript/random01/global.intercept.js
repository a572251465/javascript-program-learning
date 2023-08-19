;(function () {
  if (!!localStorage.getItem('_NO_PROXY_')) {
    console.warn(
      '🍭 setTimeout/ setInterval 托管失败, 您现在使用的是原生的定时器'
    )
    return
  }

  // ----------------------------------------------- 链表的数据结构 -----------------------------------------------
  class Node {
    constructor(value, next = null) {
      this.value = value
      this.next = next
    }
  }
  class LinkedList {
    constructor() {
      // 虚拟头/ 尾节点
      this.head = this.tail = new Node(null)
      this.size = 1
    }

    isEmpty() {
      return this.size === 1
    }
    push(value) {
      const node = new Node(value)
      this.tail.next = node
      this.tail = node
      this.size++
    }
    poll() {
      if (this.isEmpty()) return null
      const currNode = this.head.next
      this.head.next = currNode.next
      this.size--
      if (this.isEmpty()) this.tail = this.head
      return currNode.value
    }
  }

  // 表示要重写的方法
  const _setTimeout = window.setTimeout
  const _clearTimeout = window.clearTimeout
  // 表示隐藏的div
  let hiddenDiv = null
  // 表示每秒要执行的帧数
  const FPS = 60
  // 表示递增的定时器 队列值
  let returnTimerValue = 0
  // 表示onload 链表（后续扩展）
  const onloadLinkedList = new LinkedList()
  // 表示页面是否在后台工作
  let visibilityState = false

  /**
   * 判断是否激活requestAnimationFrame
   *
   * @author lihh
   * @return {false|boolean}
   */
  const isActivateRequestAnimationFrame = () =>
    !(self.frameElement && self.frameElement.tagName == 'IFRAME') &&
    visibilityState

  // 这是一个补丁方法 因为原生的API【requestAnimationFrame】在浏览器后台运行 或是 iframe中运行时 会停止执行 所以只是一个补丁方法，为了兼容性处理
  const requestAnimationFrameHandler = isActivateRequestAnimationFrame()
    ? requestAnimationFrame
    : (callback) => {
        let timer = _setTimeout(() => {
          callback()
          _clearTimeout(timer)
          // 加速 gc回收
          timer = null
        }, 1000 / FPS)
      }

  /**
   * 根据秒 来计算执行次数
   *
   * @author lihh
   * @param x 表示秒
   * @return {number}
   */
  const executeCountBySecond = (x) => x * FPS
  /**
   * 随机返回定时器的值 主要是模拟定时器
   * @author lihh
   * @return {number}
   */
  const randomReturnTimerValue = () => ++returnTimerValue

  /**
   * 生成一个随机的定时器值
   * @author lihh
   * @return {string}
   */
  const genRandomTimerValue = () =>
    ((Math.random() * 10000) | 0) + '' + +new Date()

  /**
   * 页面编写一个隐藏div 目的是唤醒requestAnimationFrame
   * @author lihh
   */
  const generateHiddenDom = () => {
    hiddenDiv = document.createElement('div')
    hiddenDiv.innerText = genRandomTimerValue()
    hiddenDiv.style.position = 'fixed'
    hiddenDiv.style.top = '0'
    hiddenDiv.style.left = '-200px'
    window.document.body.appendChild(hiddenDiv)
  }
  /**
   * 表示改变dom的内容
   *
   * @author lihh
   * @return {string}
   */
  const changeDomContentHandler = () => {
    // 如果dom为空的话 表示未加载完毕 等待中
    if (!hiddenDiv)
      onloadLinkedList.push(() =>
        Promise.resolve().then(
          () => (hiddenDiv.innerText = genRandomTimerValue())
        )
      )
    else hiddenDiv.innerText = genRandomTimerValue()
  }

  /**
   * 此方法表示用来生成一个启动器
   *
   * @author lihh
   * @param callback 回调方法 其实就是setTimeout 要执行的方法
   * @param delay 表示延迟执行时间 按照定时器的时间是以秒为单位
   */
  const generateStarter = (callback, delay) => {
    // 有某种情况 可能已经触发了演示器 但是js还没加载完
    if (!hiddenDiv) {
      onloadLinkedList.push(() => generateStarter(callback, delay))
      return randomReturnTimerValue()
    }
    // 表示转换后的执行次数
    let transformExecuteCount = executeCountBySecond((delay / 1000) | 0)
    const wrapperCallback = () => {
      transformExecuteCount--

      if (transformExecuteCount <= 0) Promise.resolve().then(callback)
      else {
        changeDomContentHandler()
        requestAnimationFrameHandler(wrapperCallback)
      }
    }
    requestAnimationFrameHandler(wrapperCallback)
    changeDomContentHandler()
    return randomReturnTimerValue()
  }

  window.setTimeout = (...args) => {
    let callback = null,
      delay = 0
    if (args.length === 0)
      throw TypeError(
        "Failed to execute 'setTimeout' on 'Window': 1 argument required, but only 0 present"
      )
    if (typeof args[0] !== 'function')
      return console.warn(
        "not executed, because the first argument isn't a function"
      )
    else callback = args[0]

    if (args[1] !== undefined && typeof args[1] !== 'number')
      return console.warn(
        "not executed, because the second argument isn't a number"
      )
    else delay = args[1] || delay

    return generateStarter(callback, delay)
  }
  window.clearTimeout = () => {}
  window.setInterval = () => {
    throw new Error('建议使用setTimeout, 因为setInterval会导致内存泄露')
  }
  window.clearInterval = () => {}

  onloadLinkedList.push(generateHiddenDom)
  window.onload = () => {
    let fn = null
    while ((fn = onloadLinkedList.poll())) fn()
  }
  document.addEventListener(
    'visibilitychange',
    () => (visibilityState = document.visibilityState === 'visible')
  )
  console.log(
    ' 🍭 setTimeout/ setInterval 已经交给该js托管, 无需担心内存泄露的问题'
  )
})()
