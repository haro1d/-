//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    dataList: [
      {
        goods_id: 1,
        goods_title: '商品标题1',
        goods_img: '../../im/grass.jpg',
        goods_xiaoliang: '0',
        goods_price: '60',
        goods_collect: 0
      }, {
        goods_id: 2,
        goods_title: '商品标题2',
        goods_img: '../../im/fxz.jpg',
        goods_xiaoliang: '0',
        goods_price: '70',
        goods_collect: 0
      }, {
        goods_id: 3,
        goods_title: '商品标题3',
        goods_img: '../../im/grass.jpg',
        goods_xiaoliang: '0',
        goods_price: '80',
        goods_collect: 0
      }, {
        goods_id: 4,
        goods_title: '商品标题4',
        goods_img: '../../im/meihua.jpg',
        goods_xiaoliang: '0',
        goods_price: '90',
        goods_collect: 0
      }, {
        goods_id: 5,
        goods_title: '商品标题5',
        goods_img: '../../im/leaf1.jpg',
        goods_xiaoliang: '0',
        goods_price: '110',
        goods_collect: 0
      }
    ],
    getId:0

  },
 
 //联系客服
  ct: function() {
    var p = '020-850000';
    
    wx.showModal({
      title: '提示',
      content: '拨打xx客服：' + p,
      confirmColor: "#FD8238",
      success(res) {
        if (res.confirm) {
          wx.makePhoneCall({
            phoneNumber: p,
          });
        }
      }

    });
  }
 

})