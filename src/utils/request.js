import BASE_URL from './baseUrl.js'

class Request {
  static request(url, data, method = 'POST', isLoading = true, contentType) {
    const params = {
      url: BASE_URL + url,
      data,
      method,
      header: {
        'content-type': contentType || 'application/json',
      },
      dataType: 'json',
      responseType: 'text',
      cors_mode: 'cors',
    }
    const TOKEN = uni.getStorageSync('wisdom-progress-app__token')
    TOKEN && (params.header.Authorization = TOKEN)

    isLoading &&
      uni.showLoading({
        title: '加载中...',
      })

    return new Promise((resolve, reject) => {
      uni.request({
        ...params,
        success: res => {
          isLoading && uni.hideLoading()
          if (res.statusCode && res.statusCode === 200) {
            resolve(res)
          } else {
            reject(res)
            uni.showToast({
              title: '请求错误: ' + res.data.message,
              icon: 'none',
            })
          }
        },
        fail: err => {
          isLoading && uni.hideLoading()
          uni.showToast({
            title: '请求错误: ' + err.errMsg,
            icon: 'none',
          })
          reject(err)
        },
      })
    })
  }

  static get(url, data, isLoading) {
    return this.request(url, data, 'GET', isLoading)
  }

  static post(url, data, isLoading) {
    return this.request(url, data, 'POST', isLoading)
  }

  static delete(url, data, isLoading) {
    return this.request(url, data, 'DELETE', isLoading)
  }

  static put(url, data, isLoading) {
    return this.request(url, data, 'PUT', isLoading)
  }
}

export default Request
