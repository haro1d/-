var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    goods: app.globalData.dataList,
    num: 1,
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled',
   
  },
  
  onLoad: function (options) {
    var id = this.data.id;
    this.setData({
      id: app.globalData.dataList[getApp().globalData.getId-1].goods_id-1,
      
    });
    //console.log("id-1(index): ",this.data.id);
    //var getId = options.getId
    //console.log("3" ,this.data.id)
    //console.log("43", id)
  },

  //打开透明层
  showRule: function () {
    wx.requestPayment({
      'timeStamp': timeStamp,
      'nonceStr': payObj.noncestr,
      'package': payObj.package,
      'signType': 'MD5',
      'paySign': paySign,
      'success': function (res) {
        console.log("支付成功",res)
      },
      'fail': function (res) {
        console.log(res)
      }
    })
  
    this.setData({
      payTrue: true
    })
  },
  //关闭透明层
  hideRule: function () {
    this.setData({
      payTrue: false
    })
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  collect() {
    app.globalData.dataList[this.data.id ].goods_collect = 1
    //id前一定要加this.data.
    //console.log("4" , app.globalData.dataList)


    wx.showToast({
      title: '收藏成功 ',
    })
  },

})
