var util = require('../../../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    myinfo: null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  report: function () {
    wx.navigateTo({
      url: '/second-hand/pages/xiangqing/ownerdetai/report/report',
    })
  },
  onLoad: function () {
    var that = this;
    that.loadMyinfo();
  },
 
  blacklist: function () {
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
            url: '/pages/xiangqing/ownerdetai/ownerdetai',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })

        }

      }

    })
  },

  loadMyinfo: function () {
    var that = this;
    wx.request({
      url: app.globalData.url + '/account/myInfo',
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
        'Cookie': wx.getStorageSync('sessionid')
      },
      success(res) {
        var info = res.data.replace(/\'/g, "\"");

        var myinfo = JSON.parse(info);
        myinfo.created_date = util.formatTime(new Date(myinfo.created_date));
        console.log(myinfo);
        that.setData({
          myinfo: myinfo
        })
      }
    })
  },

})