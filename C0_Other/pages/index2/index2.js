var app = getApp()
Page({
 

  /**
   * 页面的初始数据
   */
  data: {
    dataList: app.globalData.dataList
  },
 
  onLoad:function(options){
    //console.log("222", this.data.dataList);
  },
  gotoDetail:function(event){
    
    let goods = event.currentTarget.dataset.item // 取到goods
    app.globalData.getId = goods.goods_id
    
    //console.log("app.globalData.getId: " + app.globalData.getId)
    //console.log("g: ", event.currentTarget.dataset.item)
    //wx.setStorageSync('goods', goods) // 存到 Storage 里面 
    
    wx.navigateTo({ // 跳转到详情页
      url: '../detail/detail',
    })
  }

})
