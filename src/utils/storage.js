const DEADTIME_TEXT = '_DEADTIME'

/**
 * @desc 设置缓存
 * @param {string} key 缓存名
 * @param {any} value 缓存值
 * @param {number} deadtime s(秒)
 */
export function setStorage(key, value, deadtime = 0) {
  uni.setStorageSync(key, value)
  const _deadtime = parseInt(deadtime)

  if (_deadtime) {
    const timestamp = Date.now() / 1000 + _deadtime
    uni.setStorageSync(key + DEADTIME_TEXT, timestamp)
  } else {
    uni.removeStorageSync(key + DEADTIME_TEXT)
  }
}

/**
 * @desc 获取缓存
 * @param {string} key 缓存名
 * @param {any || Error} def 读取缓存失败或该缓存已过期的默认值
 * @returns
 */
export function getStorage(key, def = false) {
  const _deadtime = parseInt(uni.getStorageSync(key + DEADTIME_TEXT))

  if (_deadtime && _deadtime < Date.now() / 1000) {
    if (String(def)) return def
    else throw new Error('Storage expired:' + key + ' already expired!!!')
  }

  return uni.getStorageSync(key) || def
}

/**
 * 清除指定名称的缓存
 * @param {string} key 缓存名
 */
export function removeStorage(key) {
  uni.removeStorageSync(key)
  uni.removeStorageSync(key + DEADTIME_TEXT)
}

/**
 * 清除所有缓存
 */
export function clear() {
  uni.clearStorageSync()
}
