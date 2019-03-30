// pages/profile/suggestion/suggestion.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    textareaValue: '',
    isDisabled: false
  },

  //获取输入框内容
  getTextarea: function (e) {
    this.setData({
      textareaValue: e.detail.value
    });
  },
  //提交内容
  submit: function () {
    var that = this;
    if (that.data.textareaValue == '') {
      wx.showModal ({
        title: '请输入内容',
        showCancel: false
      });
    }
    else {
      that.setData({
        isDisabled: true
      });
      setTimeout(function () {
        wx.showToast({
          title: '提交成功！',
          icon: 'success',
          duration: 900
        });
        that.setData({
          isDisabled: false
        });
        setTimeout(function () {
          wx.navigateBack({
            delta: -1
          });
        }, 2000);
      }, 900);
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  }
})