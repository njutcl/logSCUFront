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
  onLoad: function () {
    var that = this;
    that.loadMyinfo();
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