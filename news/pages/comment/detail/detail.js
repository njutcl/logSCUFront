// pages/news/Systemmessage/system/system.js
var util = require('../../../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment: []
  },
  submit: function () {
    wx.showModal({

      title: '提示',

      content: '确认更新',

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
            url: '/pages/news/Systemmessage/system/system',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })

        }

      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var comment = JSON.parse(options.comment);
    console.log(options);
    console.log(comment);
    that.setData({
      comment: comment[options.id - 1]
    })
    console.log(that.data.comment);
  },
  //    handleAnnounce(e) {
  //     var that = this;
  //     var comment = e;
  //      comment.createdTime = util.formatTime(new Date(comment.createdTime));
  // // console.log(comment);

  //   },

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