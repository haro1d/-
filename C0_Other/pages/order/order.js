var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      gs:[],
      t:null,
      n:0
    },
  
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options){

  
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var n = this.data.n;
    this.setData({
      gs: app.globalData.dataList


    });

    for (var e = 0; e < this.data.gs.length; e++) { //判断收藏夹是否为空
      n=n+this.data.gs[e].goods_collect;
    }
    if (n==0){
      this.setData({
        t: false
      });
    }
    else{
      this.setData({
        t: true
      });
    }
    //console.log("or", this.data.gs)
    //console.log("t", this.data.t)
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

  gDetail: function (event) {
      let gs = event.currentTarget.dataset.item // 取到goods
      app.globalData.getId = gs.goods_id
      //console.log("gs: ", gs)
      wx.navigateTo({ // 跳转到详情页
        url: '../detail/detail',
    })
  },

  cancel: function (event){
    let gs= this.data.gs
    let ca = event.currentTarget.dataset.item // 取到goods
    app.globalData.getId = ca.goods_id
    
    app.globalData.dataList[getApp().globalData.getId-1].goods_collect = 0
    //console.log("ca: ", app.globalData.getId)
    //console.log("la: ", app.globalData.dataList)
    this.setData({
     'gs': this.data.gs
    });

  }
  
})