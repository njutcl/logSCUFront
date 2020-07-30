// pages/dingdan/dingdan.js
Page({
  data: {
    state: 0,
    _num: '0'
  },
  /** 
 * 点击tab切换 
 */
  toggle(e) {
    console.log(e.currentTarget.dataset.index);
    if (this.data._num === e.currentTarget.dataset.index) {
      return false;
    } else {
      this.setData({
        _num: e.currentTarget.dataset.index
      })
    }



    // if (e.currentTarget.dataset.index=="0"){
    //   this.setData({
    //     state: 0,
    //     _num: e.target.dataset.index
    //   })
    // } else if (e.currentTarget.dataset.index == "1"){
    //   this.setData({
    //     state:1,
    //     _num: e.target.dataset.index
    //   })
    // } else if (e.currentTarget.dataset.index == "2"){
    //   console.log('已进入已过期');
    //   this.setData({
    //     state: 2,
    //     _num: e.target.dataset.index
    //   })
    // }
  },

  /**
   * 页面的初始数据
   */
  jiangan1: function () {
    wx.navigateTo({
      url: '/pages/paotui/keshundai/jiangan/jiangan',
    })
  },
  wangjiang1: function () {
    wx.navigateTo({
      url: '/pages/paotui/keshundai/wangjiang/wangjiang',
    })
  },
  huaxi1: function (options) {
    wx.navigateTo({
      url: '/pages/paotui/keshundai/huaxi/huaxi',
    })
  },
  jiangan2: function () {
    wx.navigateTo({
      url: '/pages/paotui/xuyaoshundai/jiangan/jiangan',
    })
  },
  wangjiang2: function () {
    wx.navigateTo({
      url: '/pages/paotui/xuyaoshundai/wangjiang/wangjiang',
    })
  },
  huaxi2: function (options) {
    wx.navigateTo({
      url: '/pages/paotui/xuyaoshundai/huaxi/huaxi',
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