// pages/profile/profile.js

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,

  },
  //进入登录界面
  toLogin: function () {
    wx.navigateTo({
      url: '../login/login',
    })
  },

  //跳转到我的订单
  navigatorToOrder: function (e) {
    var that = this;
    if (!that.data.isLogin) that.toLogin();
    else
      wx.switchTab({
        url: '../order/order',
      });
  },

ct(){
  app.ct()
},


  //意见反馈
  toSuggestion: function () {
    wx.navigateTo({
      url: '/pages/suggestion/suggestion',
    })
  },
  //退出登录
  exit: function () {
    var that = this;
    wx.showModal({
      title: '',
      content: '请确认是否退出登录',
      confirmColor: "#FD8238",
      success(res) {
        if (res.confirm) {
          that.setData({
            isLogin: false
          });
          wx.removeStorageSync("userinfo");
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var isLogin = false;
    
      this.setData({
        isLogin: true
      });
    
  },

})