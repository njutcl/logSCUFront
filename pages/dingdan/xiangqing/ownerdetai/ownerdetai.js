// pages/paotui/xiangqing/ownerdetai/ownerdetai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myinfo: null
  },
  huaxi2: function (options) {
    wx.navigateTo({
      url: '/pages/dingdan/xuyaoshundai/huaxi/huaxi',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var stu = wx.getStorageSync('student');
      this.setData({ myinfo: stu });
      // console.log(this.data.myinfo);
  },
  report:function(){
  wx.navigateTo({
    url: '/pages/dingdan/xiangqing/ownerdetai/report/report',
  })
  },
  blacklist:function(){
    wx.showModal({

      title: '提示',

      content: '该发单者将会被您加入黑名单',

      success: function (res) {

        if (res.confirm) {//这里是点击了确定以后
          wx.switchTab({
            url: '/pages/shouye/shouye',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        } else {//这里是点击了取消以后
           wx.switchTab({
             url: '/pages/dingdan/xiangqing/ownerdetai/ownerdetai',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })

        }

      }

    })
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