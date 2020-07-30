// pages/ershuojiaoyi/ershuojiaoyi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   ers1: '/second-hand/image/ershuojiaoyi/makeup.png',
    ers2: '/second-hand/image/ershuojiaoyi/cloth.png',
    ers3: '/second-hand/image/ershuojiaoyi/ornaments.png',
    ers4: '/second-hand/image/ershuojiaoyi/instrumentation.png',
    ers5: '/second-hand/image/ershuojiaoyi/doll.png',
    ers6: '/second-hand/image/ershuojiaoyi/electronic.png',
    ers7: '/second-hand/image/ershuojiaoyi/game.png',
    ers8: '/second-hand/image/ershuojiaoyi/shoe.png',
    ers9: '/second-hand/image/ershuojiaoyi/supplies.png',
    ers10: '/second-hand/image/ershuojiaoyi/ticket.png',
    ers11: '/second-hand/image/ershuojiaoyi/food.png',
    ers13: '/second-hand/image/ershuojiaoyi/beijing.jpg',
    ers12: '/second-hand/image/ershuojiaoyi/book.png'
  }, 
  toMeiZhuang: function () {
    wx.navigateTo({
      url: 'meizhuang/meizhuang',
    })
  },
  tofuzhuang: function () {
    wx.navigateTo({
      url: 'fuzhuang/fuzhuang',
    })
  },
  tofood: function () {
    wx.navigateTo({
      url: 'food/food',
    })
  },
  toyueqiqicai: function () {
    wx.navigateTo({
      url: 'yueqiqicai/yueqiqicai',
    })
  },
  towanou: function () {
    wx.navigateTo({
      url: 'wanou/wanou',
    })
  },
  todianzichanpin: function () {
    wx.navigateTo({
      url: 'dianzichanpin/dianzichanpin',
    })
  },
  toyouxichanpin: function () {
    wx.navigateTo({
      url: 'youxichanpin/youxichanpin',
    })
  },
  toxuexie: function () {
    wx.navigateTo({
      url: 'xuexie/xuexie',
    })
  },
  toshenghuoyongpin: function () {
    wx.navigateTo({
      url: 'shenghuoyongpin/shenghuoyongpin',
    })
  },
  tomenpiao: function () {
    wx.navigateTo({
      url: 'menpiao/menpiao',
    })
  },
  toshipin: function () {
    wx.navigateTo({
      url: 'shipin/shipin',
    })
  },
  toshuji: function () {
    wx.navigateTo({
      url: 'shuji/shuji',
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})